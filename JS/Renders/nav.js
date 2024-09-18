function GenerarNav() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <ul class="menu">
            <li class="left-links menu-opciones"> 
                <a href="index.html">Inicio</a> </li>
            </li>
            <li class="left-links menu-opciones"> 
                <a href="Nosotros.html">Quienes Somos</a> </li>
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
            <li><a href="Nosotros.html">Quienes Somos</a></li>
            <li><a href="Accidentes.html">Accidentes de trabajo</a></li>
            <li><a href="Retiros.html">Retiros Obligatorios</a></li>
            <li><a href="Sumarios.html">Sumarios Disciplinarios</a></li>
            <li><a href="Junta.html">Junta Medica/Calificaciones</a></li>
            <li><a href="Reclamos.html">Reclamos Administrativo</a></li>
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