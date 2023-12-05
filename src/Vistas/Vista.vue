<template>
  <div class="vista">
    <div class="table-title">TABLA DE DATOS</div>
    <NavbarComponent />
    <SidebarComponent />
    <div class="Data">
      <TableComponent />
    </div>

  </div>
</template>

<script>
import NavbarComponent from '../components/Navbar.vue';
import SidebarComponent from '../components/Sidebar.vue';
import TableComponent from '../components/table.vue';
export default {
  name: 'Vista_Pepe',
  components: {
    NavbarComponent,
    SidebarComponent,
    TableComponent,
  }
};
</script>

<style scoped>
.table-title {
  text-transform: uppercase;
  font-size: 50px;
  text-align: center;
  margin-top: 120px;
  margin-left: 180px;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400&display=swap');
}
</style>

