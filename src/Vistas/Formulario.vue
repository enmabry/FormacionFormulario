<template>
    <div class="Formulario">
      <NavbarComponent />
      <SidebarComponent /> 
      <FormularioComponent/>
    </div>
  </template>

<script>
import NavbarComponent from '../components/Navbar.vue';
import SidebarComponent from '../components/Sidebar.vue';
import FormularioComponent from '../components/Formulario.vue';
export default {
  name: 'Vista_Pepe',
  components: {
    NavbarComponent,
    SidebarComponent,
    FormularioComponent
  }
};
</script>