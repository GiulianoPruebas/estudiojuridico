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
                <a href="Accidentes.html">Accidentes de trabajo</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Retiros.html">Retiros Obligatorios</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Sumarios.html">Sumarios Disciplinarios</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Junta.html">Junta Medica/Calificaciones</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="Reclamos.html">Reclamos Administrativo</a>                
            </li>       
        </ul>
        <div class="menu-toggle">
            <input type="checkbox" id="toggle">
            <label for="toggle">&#9776;</label>
            <ul class="menu-dropdown">
                <li><a href="Nosotros.html">QUIENES SOMOS</a></li>
                <li><a href="Accidentes.html">ACCIDENTES DE TRABAJO</a></li>
                <li><a href="Retiros.html">RETIROS OBLIGATORIOS</a></li>
                <li><a href="Sumarios.html">SUMARIOS DISCIPLINARIOS</a></li>
                <li><a href="Junta.html">JUNTA MEDICA/CALIFICACIONES</a></li>
                <li><a href="Reclamos.html">RECLAMOS ADMINISTRATIVOS</a></li>
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