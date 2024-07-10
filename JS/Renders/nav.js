function GenerarNav() {
    const barraNav = document.createElement('nav');
    barraNav.className = 'navegacion';
    barraNav.innerHTML = `
        <li class="left-links">
            <a href="/index.html" class="texto">
                <img src="/gycestudio2.png" alt="estudiogyc" class="logo">
            </a>
        </li>
        <ul class="menu">
            <li class="left-links menu-opciones"> 
                <a href="#">Sobre Nosotros</a> </li>
            </li>
            <li class="left-links menu-opciones">                
                <a href="#">Retiros</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="#">Defensas Disciplinarias</a>                
            </li>
            <li class="left-links menu-opciones">                
                <a href="#">Derechos Laborales</a>                
            </li>                                       
        </ul>
         <div class="menu-toggle">
        <input type="checkbox" id="toggle">
        <label for="toggle">&#9776;</label>
        <ul class="menu-dropdown">
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Retiros</a></li>
            <li><a href="#">Defensas Disciplinarias</a></li>
            <li><a href="#">Derechos Laborales</a></li>
        </ul>
    </div>
    `;
    return barraNav;
}
const contenedor = document.getElementById('navPrincipal');
const barraNavegacion = GenerarNav();
contenedor.appendChild(barraNavegacion);
document.getElementById('toggle').addEventListener('change', function() {
    var menuDropdown = document.querySelector('.menu-dropdown');
    if (this.checked) {
        menuDropdown.style.display = 'block';
    } else {
        menuDropdown.style.display = 'none';
    }
});