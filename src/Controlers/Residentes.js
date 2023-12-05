
export const service = {
    getResidentes: () =>  {
        return JSON.parse(localStorage.getItem('getDefaultFormData')) || [];
    },

    deleteResidente: (id) => {
        let residentes = service.getResidentes()
        let residenteIndex = residentes.findIndex((residente) => residente.id == id)
        residentes.splice(residenteIndex, 1)
        localStorage.setItem('getDefaultFormData', JSON.stringify(residentes))
    },
    getDefaultFormData: () => {
            return  {
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
                foto: "",
            }
    }

    

}

