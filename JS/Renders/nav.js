function GenerarNav() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <ul class="menu">
            <li class="left-links menu-opciones"> 
                <a href="index.html">Inicio</a> 
            </li>
            <li class="left-links menu-opciones"> 
                <a href="Nosotros.html">Quienes Somos</a> 
            </li>
            <li class="left-links menu-opciones">                
                <a href="AreasDI.html">Areas de incumbencia</a>                
            </li>
              <li class="left-links menu-opciones">                
                <a href="Mensaje.html">Mensaje Destacado</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="#" id="chatcontac">Contacto</a>                 
            </li>
        </ul>
        <div class="menu-toggle">
            <input type="checkbox" id="toggle">
            <label for="toggle">&#9776;</label>
            <ul class="menu-dropdown">
                <li><a href="index.html">INICIO</a></li>
                <li><a href="Nosotros.html">QUIENES SOMOS</a></li>
                <li><a href="AreasDI.html">AREAS DE INCUMBENCIA</a></li>
                <li><a href="#" id="contactoDropdown">CONTACTO</a></li>
            </ul>
        </div>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNav();
contenedor.appendChild(barraNavegacion);
document.getElementById('toggle').addEventListener('change', function () {
    var menuDropdown = document.querySelector('.menu-dropdown');
    var header = document.querySelector('header');
    
    if (this.checked) {
        menuDropdown.style.display = 'block';
        header.classList.add('header-expanded');
    } else {
        menuDropdown.style.display = 'none';
        header.classList.remove('header-expanded'); 
    }
});
document.getElementById('chatcontac').addEventListener('click', function(event) {
    event.preventDefault(); 
});
