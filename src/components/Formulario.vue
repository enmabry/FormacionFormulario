<template>
  <div>
    <div v-if="mode === 'create' || mode === 'edit'">
      <Formulario :recordData = "recordData" :mode="mode" />
    </div>
    <div v-else-if="mode === 'view'">
      <VerDatos :recordData="recordData" :mode="mode"/>
    </div>
  </div>
</template>

<script>
import Formulario from  "./ModalFormulario.vue"
import VerDatos from  "./ModalFormularioVer.vue" 
export default {
  name: "Modal_Opcion",
  props: {
        mode: String,
        recordData: Object,
    },
  components: {
    Formulario,
    VerDatos
  },
  created(){
    console.log('Hola' + this.mode)
    console.log('Maria Carey', this.recordData) 
  },
  watch: {
    mode(newVal, oldVal) {
      console.log('Nuevo mode: ' + newVal + ', antiguo mode: ' + oldVal);
    },
    recordData(newVal, oldVal) {
      console.log('Nuevo recordData: ', newVal, ', antiguo recordData: ', oldVal);
    }
  },
}
</script>

