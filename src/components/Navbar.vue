<template>
    <div class="navbar">
        <div class="menu-icon">
            <button>MENU</button>
        </div>
        <div class="icon">
            <img src="../assets/user-regular (1).svg" alt="Logo" class="logo-img">
        </div>
        <div class="arrow">
            <img src="../assets/chevron-down-solid (3).svg" alt="Arrow" class="arrow-icon">
        </div>

    </div>
</template>

<style scoped>
.navbar {
    background-color: #1E272C;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 10px;
}

.menu-icon {
    cursor: pointer;
}

.arrow {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px;
    filter: invert(100%) brightness(100%);
}

.arrow-icon {
    width: 8px;
    height: 8px;
    margin-right: 35px;
    padding: 0px;


}

.icon {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1px;
    margin-left: 1680px;
    margin-right: -145px;
    filter: invert(100%) brightness(100%);
}

.logo-img {
    width: 20px;
    height: 20px;
    margin-right: 35px;
    border-left: 1px solid;
    border-color: gray !important;
    padding: 12px;


}


button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 12px;
    font-family: 'Inter', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
}
</style>

<script>
export default {
    name: 'Navbar_Component'
}
</script>