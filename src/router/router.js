import Home from "../Vistas/Home.vue"
import Vista from "../Vistas/Vista.vue"
import TablaFormulario from "../Vistas/TablaFormulario.vue"
import Router from "vue-router"
const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },

  {
    path: "/Vista",
    name: "Vista",
    component: Vista,
  },

  {
  path: "/TablaFormulario",
  name: "TablaFormulario",
  component: TablaFormulario,
  }

]

const router = new Router({
    mode: "history",
    routes
})
  
  export default router