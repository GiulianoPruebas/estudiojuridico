function GenerarNav() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <li class="left-links">
            <a href="/index.html" class="texto">
                <img src="https://live.staticflickr.com/65535/53847883972_8c153bcace.jpg" alt="estudiogyc" class="logo">
            </a>
        </li>
        <ul class="menu">
            <li class="left-links menu-opciones"> 
                <a href="Nosotros.html">Sobre Nosotros</a> </li>
            </li>
            <li class="left-links menu-opciones">                
                <a href="Retiros.html">Lesiones y Retiros</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Reclamos.html">Reclamos Administrativo</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Accidentes.html">Accidentes</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Sumarios.html">Sanciones o Sumarios</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Junta.html">Junta Medica/Calificaciones</a>                
            </li>                                           
        </ul>
         <div class="menu-toggle">
        <input type="checkbox" id="toggle">
        <label for="toggle">&#9776;</label>
        <ul class="menu-dropdown">
            <li><a href="Nosotros.html">Sobre Nosotros</a></li>
            <li><a href="Retiros.html">Lesiones y Retiros</a></li>
            <li><a href="Reclamos.html">Reclamos Administrativo</a></li>
            <li><a href="Accidentes.html">Accidentes</a></li>
            <li><a href="Sumarios.html">Sanciones o Sumarios</a></li>
            <li><a href="Junta.html">Junta Medica/Calificaciones</a></li>
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
    if (this.checked) {
        menuDropdown.style.display = 'block';
    } else {
        menuDropdown.style.display = 'none';
    }
});