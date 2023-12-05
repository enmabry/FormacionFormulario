<template>
    <div class="MiModal">
        <div class="MegaContainer">
            <div class="Titulo">
                <h2 class="Titular">Agregar un nuevo residente</h2>
            </div>
            <div class="Volver">
                <button class="botonv" @click=cerrarModal()>VOLVER</button>
            </div>

            <div class="MainContainer">
                <div class="Subtitulo">
                    <h4 id="Sub">DATOS DEL RESIDENTE</h4>
                </div>
                <div class="SubContainer">
                    <div class="Foto">
                        <div class="Fotito">
                            <input type="file" ref="fileInput" style="display: none" @change="handleImageChange">
                            <img v-if="!getDefaultFormData.foto" class="icon" src="../assets/avatar.svg" />
                            <img v-else :src="getDefaultFormData.foto" alt=" " class="iconprincipal" />
                        </div>
                        <div class="Cuadradito" @click="openFileInput">
                            <img src="../assets/pencil-solid.svg" alt="Icono" class="iconfotosecundaria" />
                        </div>
                    </div>
                    <div class="Formulario">
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="documento">N° de documento:</label>
                            <input class="InputFormulario" type="text" name="documento" id="documento"
                                v-model="getDefaultFormData.id">
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="nombre">Nombre:</label>
                            <input class="InputFormulario" type="text" name="nombre" id="nombre"
                                v-model="getDefaultFormData.nombre">
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="apellidos">Apellidos:</label>
                            <input class="InputFormulario" type="text" name="apellidos" id="apellidos"
                                v-model="getDefaultFormData.apellido">
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="email">Email:</label>
                            <input class="InputFormulario" type="email" name="email" id="email"
                                v-model="getDefaultFormData.email">
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="telefono">Teléfono:</label>
                            <input class="InputFormulario" type="tel" name="telefono" id="telefono"
                                v-model="getDefaultFormData.telefono">
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="fecha_nacimiento">Fecha de nacimiento:</label>
                            <input v-model="getDefaultFormData.fecha" class="InputFormularioDate" type="date"
                                name="fecha_nacimiento" id="fecha_nacimiento">
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="nacionalidad">Nacionalidad:</label>
                            <select class="LugarNacimiento" v-model="getDefaultFormData.nacionalidad">
                                <option hidden value="">Seleccionar nacionalidad</option>
                                <option v-for="pais in this.listaPaises" :key="pais" :value="pais">{{ pais }}</option>
                            </select>
                        </div>
                        <div class="formulario-class">
                            <label id="LabelFormulario" for="lugar_nacimiento">Lugar de nacimiento:</label>
                            <input v-model="getDefaultFormData.LugarNacimiento" class="InputFormulario2" type="text"
                                name="lugar_nacimiento" id="lugar_nacimiento">
                        </div>
                        <div class="formulario-class">
                            <label class="LabelFormulario5" for="idioma">Idioma:</label>
                            <select class="IdiomaOpc" v-model="getDefaultFormData.idioma">
                                <option value="opcion1" selected disabled>Seleccionar idioma</option>
                                <option value="opcion2">Español</option>
                                <option value="opcion3">Inglés</option>
                                <option value="opcion4">Francés</option>
                                <option value="opcion5">Portugués</option>
                            </select>
                        </div>
                        <div>
                            <label class="LabelFormularioG">Género:</label><br>
                            <input v-model="getDefaultFormData.genero" type="radio" name="genero" value="Masculino"
                                class="GeneroOpcion"> <label class="LabelM">Masculino</label>
                            <input v-model="getDefaultFormData.genero" type="radio" name="genero" value="Femenino"
                                class="GeneroOpcionF"> <label class="LabelM">Femenino</label>
                        </div>
                        <div class="formulario-class comentario">
                            <label class="LabelComentario" for="comentario">Comentario:</label>
                            <textarea v-model="getDefaultFormData.comentario" name="comentario" class="FormComentario"
                                rows="2"></textarea>
                        </div>
                    </div>
                    <div class="Boton-Aceptar">
                        <button class="botonacpt" @click="this.guardarInformacion">ACEPTAR</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.MegaContainer {
    width: 1183px;
    height: 600px;
    font-family: 'Inter', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
    background-color: #FAFAFA;
    font-size: 18px;
    color: #4A4A4A;
}

.SubContainer {

    width: 1100px;
    height: 400px;
    margin: 2%;
    margin-left: -60px;
    margin-top: -5px;
    background-color: #FFFFFF;
    border: solid #FFFFFF;
}

.Subtitulo {
    border-bottom: solid white 1px;
    background-color: #EFEEEE;
    border-top: solid #EFEEEE 1px;
    width: 1104px;
    border-left: solid #EFEEEE 1px;
    margin-left: -60px;
    border-right: solid #EFEEEE 1px !important;
}



.Formulario {
    margin-left: 250px;
    margin-top: -235px;
    border: none;
    width: 800px;
    height: 300px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    align-items: center;
    font-family: 'Inter', sans-serif;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap');
    font: 15px;
}

.formulario-class {
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    &.comentario {
        grid-column: 2 / 4;
        width: 500px;
        margin-top: -7px;
        white-space: nowrap;

    }

}

#Sub {
    margin-left: 40px;
    background-color: #F2EEEF;
}

.Volver {
    margin-left: 1000px;
    margin-top: -45px;
    margin-bottom: 15px;
}

.Titulo {
    margin-left: 60px;
    color: #4A4A4A;
    font-size: 20px;
}

.MainContainer {
    margin-top: 50px;
    height: 480px;
    margin-left: 100px;
}

#LabelFormulario {

    margin: 10px 0px;
    font-size: 16px;

}

.InputFormulario {
    width: 240px;
    border-radius: 4px;
    height: 27px;
    border: solid #dbdbdb 1px;
}

.InputFormulario2 {
    width: 240px;
    border-radius: 4px;
    height: 22px;
    border: solid #dbdbdb 1px;


}

.FormComentario {
    width: 522px;
    height: 20px;
    resize: none;
    border-radius: 4px;
    transform: translate(0, 10px);
    border: solid #dbdbdb 1px;
}

.icon {
    position: static;
    height: 140px;
    width: 160px;
    transform: translate(32px, 40px);
    filter: brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(1408%) hue-rotate(334deg) brightness(112%) contrast(73%);

}

#LabelFormulario2 {
    margin-left: 30px;
    font-size: 16px;
    border: solid #dbdbdb 1px;
}

.GeneroOpcion {
    margin-left: 30px;
    margin-top: 15px;
    font-size: 12px;
    border-radius: 0px;
    appearance: none;
    background-clip: content-box;
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    border-radius: 4px;
    outline: none;
    margin-right: 5px;
    position: relative;
    transform: translate(4px, -5px);
}

.GeneroOpcion:checked {
    background-color: #3498db;
}

.GeneroOpcionF {
    appearance: none;
    background-clip: content-box;
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    border-radius: 4px;
    outline: none;
    margin-right: 5px;
    position: relative;
    transform: translate(4px, -5px);
    margin-left: 8px;

}

.GeneroOpcionF:checked {
    background-color: #3498db;
}


.LabelFormularioG {
    margin-left: 30px;
    font-size: 16px;
    transform: solid translate(0, -20px) !important;
}

.InputFormularioDate {
    height: 31px;
    border-radius: 4px;
    width: 242px;
    border: solid #dbdbdb 1px;
}

.LugarNacimiento {
    height: 31px;
    border-radius: 4px;
    width: 250px;
    resize: none;
    border: solid #dbdbdb 1px;
    transform: translate(0, -1px);

}

.Foto {
    margin-left: 30px;
    margin-top: 20px;
    border: solid #FAFAFA 1px;
    background-color: #FAFAFA;
    width: 220px;
    height: 210px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}

#BotonFoto {
    width: 50px;
    height: 40px;
    margin-left: -30px;
    color: #16a0eb;
}

.iconprincipal {
    position: absolute;
    top: -10px;
    left: 0px;
    width: 230px;
    height: 240px;
    object-fit: contain;
}

.iconfotosecundaria {
    position: absolute;
    top: 6px;
    right: 6px;
    height: 18px;
    filter: brightness(0) saturate(100%) invert(48%) sepia(83%) saturate(1229%) hue-rotate(170deg) brightness(96%) contrast(92%);
    object-fit: contain;
}

.Titular {
    transform: translate(0, 30px);
    font-size: 25px;
}

.Cuadradito {
    border: solid #63B4E2 1px;
    height: 30px;
    width: 30px;
    background-color: #EEF4F8;
    border-radius: 4px;
    transform: translate(187px, -143px);
    cursor: pointer;
}

.Cuadradito:hover {
    background-color: #BEDEF0;
}

.LabelFormulario5 {
    width: 250px;
    border-radius: 4px;
    height: 30px;
    transform: translate(0, 5px);
    font-size: 16px;
}

.IdiomaOpc {
    height: 28px;
    border-radius: 4px;
    transform: translate(0, 4px);
    border: solid #dbdbdb 1px;
}

.LabelComentario {
    font-size: 16px;
    transform: translate(0, 3px);
}

.LabelM {
    font-size: 15px;
    position: relative;
    top: -8px;
}

.botonv {
    height: 30px;
    width: 120px;
    border-radius: 4px;
    border: solid 1px #C8C8C8;
    background-color: #F3F3F3;
    font-size: 12px;
    transform: translate(20px, 20px);
}

.botonv:hover {
    border: solid 1px #C8C8C8;
    background-color: #E6E6E6;
    cursor: pointer;
}

.botonv:active {
    background-color: rgba(100, 100, 100, 0.075);
    cursor: pointer;
}

.botonacpt {
    height: 30px;
    width: 130px;
    border-radius: 4px;
    border: solid 1px #63B4E2;
    background-color: #EEF4F8;
    font-size: 12px;
    color: #63B4E2;
    transform: translate(285px, 20px);
}

.botonacpt:hover {
    border: solid 1px #63B4E2;
    background-color: #BEDEF0;
    cursor: pointer;
}

.botonacpt:active {
    background-color: rgba(100, 100, 100, 0.075);
    cursor: pointer;
}
</style>


<script>
import _ from "lodash";
import { service } from '../Controlers/Residentes'
export default {
    name: "ModalFormulario_EditarCrear",
    props: {
        resident: Object,
        mode: String
    },
    data() {
        return {
            isLoadingData: true,
            modalVisible: false,
            listaPaises: [],
            selectedCountry: '',
            selected: 'opcion1',
            getDefaultFormData: service.getDefaultFormData()
        };
    },

    async created() {
        this.data = await this.fetchData();
        const filtered = _.uniqBy(this.data, 'countriesAndTerritories');
        this.listaPaises = _.map(filtered, 'countriesAndTerritories');

        if (this.mode == "edit") {
            service.getDefaultFormData = this.getDefaultFormData()
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/');
                const data = await response.json();
                const modifiedData = data.records.map((record) => {
                    return {
                        ...record,
                        countriesAndTerritories: record.countriesAndTerritories.replaceAll('_', ' '),
                    }
                })
                return modifiedData;
            } catch (error) {
                console.error('Error al cargar los datos:', error);
                return [];
            }
        },

        cerrarModal() {
            const dialogElement = document.getElementById('FormularioResidentesModal');
            dialogElement.close();
        },

        openFileInput() {
            this.$refs.fileInput.click();
        },

        handleImageChange(event) {
            const file = event.target.files[0];

            if (file) {
                const imageUrl = URL.createObjectURL(file);
                service.getDefaultFormData.foto = imageUrl;
            }
        },

        guardarInformacion() {
            const storedData = JSON.parse(localStorage.getItem('getDefaultFormData')) || [];
            storedData.push(this.getDefaultFormData);
            localStorage.setItem('getDefaultFormData', JSON.stringify(storedData));

            service.getDefaultFormData = {
                id: "",
                nombre: "",
                apellido: "",
                email: "",
                telefono: "",
                fecha: "",
                nacionalidad: "",
                LugarNacimiento: "",
                idioma: "",
                genero: "",
                comentario: "",
                foto: ""
            };
            this.cerrarModal();
            location.reload();
        },
    }
};
</script>