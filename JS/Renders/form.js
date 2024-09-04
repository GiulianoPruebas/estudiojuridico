import { historialPreguntas } from './Historial.js';
document.addEventListener('DOMContentLoaded', () => {
    function actualizarCampoCaso() {
        const casoInput = document.querySelector('input[name="CASO"]');
        if (historialPreguntas && historialPreguntas.length > 0) {
            const casoValue = historialPreguntas.map(hp => hp.pregunta.pregunta).join(' - ');
            casoInput.value = casoValue;
            console.log('CASO');
        } else {
            console.log('No hay historial de preguntas para actualizar el campo CASO.');
        }
    }
    actualizarCampoCaso();
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        actualizarCampoCaso();
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'flex';  
        setTimeout(() => {
            event.target.submit();  
        }, 200); 
    });
});