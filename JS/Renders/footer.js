function renderFooter() {
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    const footer = document.createElement('div');
    footer.className = 'fbox-container';
    footer.innerHTML = `    
        <div class="fbox">
            <h3>General</h3><br>
            <ul>
                <li><a href="Nosotros.html">Acerca de</a><br></li>
                <li><a href="#">Preguntas frecuentes</a><br></li>
            </ul>
        </div>
        <div class="fbox">
            <h3>Navegar en GYC</h3><br>
            <ul>
                <li><a href="index.html#hacemos">Servicios</a><br></li>
                <li><a href="index.html">Inicio</a><br></li>
            </ul>
        </div>
    `;
    const footerCredit = document.createElement('div');
    footerCredit.className = 'credit';
    footerCredit.innerHTML = `<p>&copy; 2024 Astro. Todos los derechos reservados.</p>`;
    footerContainer.appendChild(footer);
    footerContainer.appendChild(footerCredit);
    return footerContainer;
}
const contenedor = document.querySelector('.footer');
const footerLogin = renderFooter();
contenedor.appendChild(footerLogin);
