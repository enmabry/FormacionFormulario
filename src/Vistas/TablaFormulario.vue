<template>
    <div class="Tabla-Formulario">
      <NavbarComponent />
      <SidebarComponent /> 
      <TablaComponent/>
    </div>
  </template>

<script>
import NavbarComponent from '../components/Navbar.vue';
import SidebarComponent from '../components/Sidebar.vue';
import TablaComponent from '../components/dataFormulario.vue';
export default {
  name: 'Vista_Pepe',
  components: {
    NavbarComponent,
    SidebarComponent,
    TablaComponent
  }
};
</script>