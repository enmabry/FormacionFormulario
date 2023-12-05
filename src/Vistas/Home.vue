<template>
  <div class="vista">
    <NavbarComponent />
    <SidebarComponent />
    <div class="Home">
      <h1> SISTEMA COVID-19</h1>
      <h2>Sistema de control de datos<br />para la enfermedad Covid - 19</h2>

      <img src="../assets/covidmapa.png" alt="Imagen" class="imagen">
    </div>

  </div>
</template>
  
<style scoped>
.vista {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}


h1 {
  font-size: 70px;
  margin-bottom: 8px;
  margin-left: 150px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
}

h2 {
  font-size: 35px;
  margin-bottom: 100px;
  margin-left: 150px;
  line-height: 1;
  color: gray;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap');
}

h2 span {
  white-space: nowrap;
}


.imagen {
  max-width: 1000px;
  max-height: 1250px;
  margin-left: 150px;
  margin-bottom: 100px;
}
</style>
  
<script>
import NavbarComponent from '../components/Navbar.vue';
import SidebarComponent from '../components/Sidebar.vue';
export default {
  name: 'Home_Pepe',
  components: {
    NavbarComponent,
    SidebarComponent
  }
};
</script>