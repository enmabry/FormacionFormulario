<template>
  <div class="container">

    <div class="filter-bar">
      <select class="Countrybar" v-model="selectedCountry" @change="FilterByCountry">
        <option value="">Filtrar por país</option>
        <option value="Países" disabled>Países</option>
        <option v-for="pais in listaPaises" :key="pais" :value="pais">{{ pais }}</option>
      </select>
      <select class="Continentbar" v-model="selectedContinent" @change="filterByContinent">
        <option value="">Filtrar por continente</option>
        <option value="Africa">África</option>
        <option value="America">América</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
      </select>
      <input v-model="filterStartDate" type="date" placeholder="Fecha inicial">
      <input v-model="filterEndDate" type="date" placeholder="Fecha final">

      <button @click="clearFilter">Restablecer Filtros</button>
    </div>

    <table class="covid-Table">
      <thead>
        <tr>
          <th>PAÍS</th>
          <th>CASOS</th>
          <th>MUERTES</th>
          <th>FECHA</th>
          <th>CONTINENTE</th>
          <th>CASOS CUMULATIVOS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in paginatedData" :key="record.dateRep"
          :class="index % 2 === 0 ? 'blue-row' : 'white-row'">
          <td>{{ record.countriesAndTerritories }}</td>
          <td>{{ record.cases | toFixed2 }}</td>
          <td>{{ record.deaths | toFixed2 }}</td>
          <td>{{ record.dateRep }}</td>
          <td class="col-continent">{{ record.continentExp }}</td>
          <td>{{ record.casosCumulativos | toFixed2 }}</td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button class="botonFlechaIz" @click="previousPage" :disabled="currentPage === 1">🡸</button>
      <span v-for="page in visiblePages" :key="page" @click="goToPage(page)"
        :class="{ 'current-page': page === currentPage }">{{ page }}</span>
      <span v-if="currentPage + 3 < totalPages">...</span>
      <span @click="goToPage(totalPages)" :class="{ 'current-page': totalPages === currentPage }">{{ totalPages }}</span>
      <button class="botonFlechaDer" @click="nextPage" :disabled="currentPage * pageSize >= data.length">🡺</button>
    </div>
  </div>
</template>

<style scoped>
.covid-Table {
  border-collapse: collapse;
  width: 50%;
  margin-left: 580px;
  margin-top: 30px;
}

th {
  border-top: 1px solid #F4F4F4;
  border-bottom: 1px solid #F4F4F4;
  padding: 20px;
  text-align: left;
  color: #16a0eb;
  font-family: 'Inter', sans-serif;
  padding-left: 50px;
}

td {
  border: 0px solid white;
  padding: 18px;
  text-align: left;
  font-size: 13px;
  color: #666;
  font-family: 'Inter', sans-serif;
  padding-left: 50px;
}

.blue-row {
  background-color: #F4F9FF;
}

.white-row {
  background-color: #ffffff;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-left: 200px;
  color: gray;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
  font-size: 1px;
}

button {
  margin: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
}

.botonFlechaIz {
  color: gray;
}

.botonFlechaDer {
  color: gray;
}

span {
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
}

.current-page {
  color: #0081C6;
}

.pagination span:hover {
  text-decoration: none;
}

.col-continent {
  text-align: center;
}

.filter-bar {
  margin-left: 600px;
}

.filter-input {
  margin-right: 100px !important;
}

.continent-filter {
  margin-right: 30px;
}

.Countrybar {
  font-size: 16px;
  color: gray;
  border: solid black !important;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
}

.Continentbar {
  font-size: 16px;
  color: gray;
  border: solid black !important;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
}
</style>

<script>
import _ from "lodash";
export default {
  name: "covid-table",
  filters: {
    toFixed2(value) {
      if (!isNaN(value)) {
        return parseFloat(value).toFixed(2);
      }
      return value;
    },
  },
  data() {
    return {
      totalPages: 0,
      isLoadingData: true,
      data: [],
      listaPaises: [],
      columns: [
        {
          field: "countriesAndTerritories",
          label: "País",
        },
        {
          field: "cases",
          label: "Casos",
        },
        {
          field: "deaths",
          label: "Muertes",
        },
        {
          field: "dateRep",
          label: "Fecha",
        },
        {
          field: "continentExp",
          label: "Continente",
        },
        {
          field: "casosCumulativos",
          label: "Casos cumulativos",
        },
      ],
      currentPage: 1,
      pageSize: 10,
      filterCountry: '',
      filterContinent: '',
      searchTerm: '',
      filterStartDate: '',
      filterEndDate: '',
      selectedContinent: '',
      selectedCountry: '',
    };
  },
  computed: {
    paginatedData() {
      if (this.data.length === 0) {
        return [];
      }

      const filteredData = this.data.filter(record => {
        const countryMatch = this.filterCountry === '' || record.countriesAndTerritories.toLowerCase().includes(this.filterCountry.toLowerCase());
        const continentMatch = this.filterContinent === '' || record.continentExp.toLowerCase() === this.filterContinent.toLowerCase();
        const startDate = new Date(this.filterStartDate).getTime();
        const endDate = new Date(this.filterEndDate).getTime();
        const recordDate = new Date(record.dateRep).getTime();
        const dateMatch = !this.filterStartDate || !this.filterEndDate || (startDate <= recordDate && recordDate <= endDate);
        return countryMatch && continentMatch && dateMatch;
      });
      this.updatePages(filteredData)
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return filteredData.slice(start, end);

    },

    visiblePages() {
      const startPage = this.currentPage - 1 > 0 ? this.currentPage - 1 : 1;
      const endPage = this.currentPage + 2 < this.totalPages ? this.currentPage + 2 : this.totalPages;
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },
  },

  async created() {
    this.data = await this.fetchData();
    const filtered = _.uniqBy(this.data, 'countriesAndTerritories')
    this.listaPaises = _.map(filtered, 'countriesAndTerritories')
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/');
        const data = await response.json();
        const modifiedData = data.records.map((record) => {
          return {
            ...record,
            dateRep: this.splitDateInput(record.dateRep),
            countriesAndTerritories: record.countriesAndTerritories.replaceAll('_', ' '),
            casosCumulativos: record["Cumulative_number_for_14_days_of_COVID-19_cases_per_100000"] || "-"
          }
        })

        this.totalPages = data.records.length
        return modifiedData;
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        return [];
      }
    },
    nextPage() {
      this.currentPage++;
    },
    previousPage() {
      this.currentPage--;
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    filterByContinent() {
      this.filterContinent = this.selectedContinent;
    },
    FilterByCountry() {
      this.filterCountry = this.selectedCountry;
    },
    clearFilter() {
      this.filterContinent = '';
      this.filterCountry = '';
      this.selectedContinent = '';
      this.selectedCountry = '';
      this.filterStartDate = '';
      this.filterEndDate = '';
    },
    splitDateInput(inputDate) {
      const [day, month, year] = inputDate.split('/');
      return `${month}/${day}/${year}`;
    },
    updatePages(filteredData) {
      this.totalPages = Math.ceil(filteredData.length / this.pageSize);
    },
  },
};
</script>