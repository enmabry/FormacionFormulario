<template>
  <div class="sidebar">
    <router-link to="/"><button :class="['sidebar-button', $route.name == 'Home' ? 'selected' : '']">
        <img src="../assets/house-solid (2).svg" alt="Icono" class="icon">
        <span class="button-text">INICIO</span>
      </button></router-link>
    <router-link to="/Vista"><button :class="['sidebar-button-second', $route.name == 'Vista' ? 'selected' : '']">
        <img src="../assets/circle-plus-solid (1).svg" alt="Icono" class="icon">
        <span class="button-text">DATOS</span>
      </button></router-link>

      <router-link to="/TablaFormulario"><button :class="['sidebar-button-third', $route.name == 'TablaFormulario' ? 'selected' : '']">
        <span class="button-text">RESIDENTES</span>
      </button></router-link>
    
    
      <div class="copyright">
      <h3>© Copyright 2021 Universidad Europea <br /> del Atlántico</h3>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #1E272C;
  color: #fff;
  position: fixed;
  top: 50px;
  left: 0;
  height: 100%;
  z-index: 5;
}

.sidebar-button {
  background: none;
  border-top: 1px solid gray !important;
  border-bottom: 1px solid gray;
  border-right: none;
  border-left: none;
  margin-top: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
}

.sidebar-button-second {
  background: none;
  border-bottom: 1px solid gray;
  border-top: 1px;
  border-right: none;
  border-left: none;
  margin-top: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
}

.sidebar-button-third {
  background: none;
  border-bottom: 1px solid gray;
  border-top: 1px;
  border-right: none;
  border-left: none;
  margin-top: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
}

.sidebar-button:hover {
  background-color: #007BFF;

  .icon {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  .button-text {
    text-decoration: underline #007BFF !important;
  }
}

.sidebar-button-second:hover {
  background-color: #007BFF;

  .icon {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  .button-text {
    text-decoration: underline #007BFF !important;
  }
}

.sidebar-button-third:hover{
  background-color: #007BFF;
  .icon {
    filter: brightness(0) saturate(100%) invert(100%);
  }

  .button-text {
    text-decoration: underline #007BFF !important;
  }


}


.router-link-active {
  text-decoration: underline #1E272C;
  color: inherit !important;
}

.sidebar-button .icon {
  margin-right: -10px;
  width: 20px;
  height: 20px;
  text-decoration: none !important;
  color: inherit !important;
  filter: brightness(0) saturate(100%) invert(32%) sepia(46%) saturate(6809%) hue-rotate(183deg) brightness(98%) contrast(102%);
}

.sidebar-button-second .icon {
  margin-right: -10px;
  width: 20px;
  height: 20px;
  text-decoration: none !important;
  color: inherit !important;
  filter: brightness(0) saturate(100%) invert(32%) sepia(46%) saturate(6809%) hue-rotate(183deg) brightness(98%) contrast(102%);
}

.sidebar-button-third .icon {
  margin-right: -10px;
  width: 20px;
  height: 20px;
  text-decoration: none !important;
  color: inherit !important;
  filter: brightness(0) saturate(100%) invert(32%) sepia(46%) saturate(6809%) hue-rotate(183deg) brightness(98%) contrast(102%);
}




.selected {
  background-color: #007BFF;

  .button-text {
    text-decoration: underline #007BFF !important;
  }
}

.selected .icon {
  filter: brightness(0) saturate(100%) invert(100%);


}

.button-text:hover {
  text-decoration: underline #007BFF;
}

.button-text {
  margin-left: 15px;
  text-decoration: underline #1E272C !important;
  color: inherit !important;
}

.sidebar-button:nth-of-type(1) {
  border-top: 1px solid #F4F4F4;
}


.copyright {
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 10px;
  margin-left: 2px;
  margin-right: 2px;
  font-weight: 100;
  padding: 1px;
  font-family: 'Inter', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap');
}
</style>

<script>
export default {
  name: 'Sidebar_Component',
};
</script>