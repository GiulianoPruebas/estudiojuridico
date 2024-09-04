document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Detener el envío automático del formulario

    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'flex';  // Mostrar la pantalla de carga

    // Simular un retraso de 2 segundos antes de enviar el formulario
    setTimeout(() => {
        event.target.submit();  // Enviar el formulario
    }, 2000);  // Puedes ajustar el tiempo según prefieras
});