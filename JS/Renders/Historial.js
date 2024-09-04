function cargarHistorialDesdeLocalStorage() {
    const datosGuardados = localStorage.getItem('historialPreguntas');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

export const historialPreguntas = cargarHistorialDesdeLocalStorage();