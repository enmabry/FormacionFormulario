<template>
  <div class="container">
    <div class="tableheader">
      <h2 class="Titular">Listado de Residentes</h2>
      <button class="botonAñadir" @click="handleModal(record, 'create')">Añadir</button>
      <dialog id="FormularioResidentesModal">
        <MiModal  :mode="mode" :recordData="record" ref="myModal" />
      </dialog>
    </div>

    <table class="datos-formulario"> 
      <thead>
        <tr>
          <th style="white-space: nowrap;">N° DOCUMENTO</th>
          <th style="white-space: nowrap;">NOMBRE</th>
          <th style="white-space: nowrap;">APELLIDOS</th>
          <th style="white-space: nowrap;">EMAIL</th>
          <th style="white-space: nowrap;">TELÉFONO</th>
          <th style="white-space: nowrap;">NACIONALIDAD</th>
          <th style="white-space: nowrap;"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in pagedData" :key="index"
          :class="{ 'blue-row': index % 2 === 0, 'white-row': index % 2 !== 0 }">
          <td>{{ record.id }}</td>
          <td>{{ record.nombre }}</td>
          <td style="white-space: nowrap;">{{ record.apellido }}</td>
          <td>{{ record.email }}</td>
          <td>{{ record.telefono }}</td>
          <td>{{ record.nacionalidad }}</td>
          <td style="white-space: nowrap;">
            <div class="cuadradote">
              <div class="cuadradito1" @click="handleModal(record, 'view')"><img src="../assets/eye-regular.svg"
                  alt="Icono" class="iconfotosecundaria" />
              </div>
              <div class="cuadradito"><img src="../assets/clock-rotate-left-solid.svg" alt="Icono"
                  class="iconfotosecundaria" /></div>
              <div class="cuadradito" @click="handleModal(record, 'edit')"><img src="../assets/pencil-solid.svg"
                  alt="Icono" class="iconfotosecundaria" />
              </div>
              <div class="cuadradito3" @click="deleteResidente(record.id)"><img src="../assets/trash-can-solid.svg"
                  alt="Icono" class="iconfotosecundaria2" />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button class="botonFlechaIz" @click="previousPage" :disabled="currentPage === 1">🡸</button>
      <span v-if="currentPage > 2">...</span>
      <button v-if="currentPage > 1" @click="goToPage(currentPage - 1)">{{ currentPage - 1 }}</button>
      <button @click="goToPage(currentPage)" :class="{ 'current-page': true }">{{ currentPage }}</button>
      <button v-if="currentPage < totalPages" @click="goToPage(currentPage + 1)">{{ currentPage + 1 }}</button>
      <span v-if="currentPage < totalPages - 1">...</span>
      <button class="botonFlechaDer" @click="nextPage" :disabled="currentPage * pageSize >= records.length">🡺</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}

.datos-formulario {
  width: 80%;
  border-collapse: collapse;
  margin-left: 320px;
  margin-top: 40px;
}

.datos-formulario th {
  border-top: 1px solid #F4F4F4;
  border-bottom: 1px solid #F4F4F4;
  padding: 20px;
  text-align: left;
  color: #16a0eb;
  font-family: 'Inter', sans-serif;
  padding-left: 50px;
}

.datos-formulario td {
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

.tableheader {
  transform: translate(350px, 60px);
  width: 290px;

}

.cuadradito {
  border: solid #63B4E2 1px;
  height: 30px;
  width: 30px;
  background-color: #F3F3F3;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  margin-top: 10px;
  margin: 0 3px;
}

.cuadradito:hover {
  background-color: #BEDEF0;
}

.cuadradito1 {
  border: solid #63B4E2 1px;
  height: 30px;
  width: 30px;
  background-color: #F3F3F3;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  margin-top: 10px;
  margin: 0 3px;
}

.cuadradito1:hover {
  background-color: #BEDEF0;
}

.cuadradito3 {
  border: solid #AB4B68 1px;
  height: 30px;
  width: 30px;
  background-color: #F3F3F3;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  margin-top: 10px;
  margin: 0 3px;
}

.cuadradito3:hover {
  background-color: #F79DAD;
}

.cuadradote {
  display: flex;
  flex-direction: row;
}

.iconfotosecundaria {
  position: absolute;
  margin-left: 6px;
  margin-top: 5px;
  height: 18px;
  filter: brightness(0) saturate(100%) invert(48%) sepia(83%) saturate(1229%) hue-rotate(170deg) brightness(96%) contrast(92%);
  object-fit: contain;
}

.iconfotosecundaria2 {
  position: absolute;
  margin-left: 8px;
  margin-top: 5px;
  height: 18px;
  filter: brightness(0) saturate(100%) invert(36%) sepia(7%) saturate(4611%) hue-rotate(290deg) brightness(95%) contrast(82%);
  object-fit: contain;
}

.botonAñadir {
  transform: translate(1300px, -50px);
  height: 30px;
  width: 120px;
  border-radius: 4px;
  border: solid 1px #63B4E2;
  background-color: #EEF4F8;
  font-size: 16px;
  color: #63B4E2;
  font-family: 'Inter', sans-serif;
}

.botonAñadir:hover {
  border: solid 1px #63B4E2;
  background-color: #BEDEF0;
  cursor: pointer;
}

.Modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

dialog {
  border: none;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
}

.ResidentesPorPagina {
  transform: translate(330px, -5px);
  width: 200px;

}

.datos-formulario td {
  padding: 15px;
  text-align: left;
  font-size: 13px;
  color: #666;
  font-family: 'Inter', sans-serif;
  padding-left: 50px;
}

.pagination {
  margin-top: 20px;
  margin-left: 1000px;
  transform: translate(-40px, -10px);
  position: absolute;
}

.pagination {
  margin-top: 20px;
  margin-left: 1700px;
  position: absolute;
}

.pagination button {
  margin: 0 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;

}

.current-page {
  font-weight: bold;
  color: #63B4E2;
}

.pagination span {
  margin: 0 5px;
  color: #666;
}
</style>


<script>
import MiModal from './Formulario.vue';
import { service } from '../Controlers/Residentes'
export default {
  data() {
    return {
      records: service.getResidentes(),
      selectedRowData: null,
      modalVisible: false,
      mode: "",
      record: null,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10,
    }
  },
  created() {
    {
      this.totalPages = Math.ceil(this.records.length / this.pageSize);
    }
  },
  methods: {
    handleModal(record, mode) {
      this.record = record;
      this.mode = mode;

      const dialogElement = document.getElementById('FormularioResidentesModal');
      dialogElement.showModal();
      this.modalVisible = true;

      this.$refs.myModal.openModal();
      console.log('Mode' + mode)
      console.log('Record', record)
      
    },

    deleteResidente(id) {
      service.deleteResidente(id)
      this.records = service.getResidentes()
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      if (nextPage <= this.totalPages) {
        this.goToPage(nextPage);
        this.visiblePages = this.calculateVisiblePages();
      }

    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      if (previousPage >= 1) {
        this.goToPage(previousPage);
        this.visiblePages = this.calculateVisiblePages();
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },


  },
  components: {
    MiModal
  },
  computed: {
    pagedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.records.slice(startIndex, endIndex) || []
    },
    visiblePages() {
      const startPage = Math.max(this.currentPage - 1, 1);
      const endPage = Math.min(this.currentPage + 2, this.totalPages);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },

  }
};
</script>