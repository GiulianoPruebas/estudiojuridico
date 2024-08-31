function updateStylesheetVisibility() {
    const stylesheet = document.getElementById('coreccion-css');
    if (window.matchMedia("(max-width: 480px)").matches) {
        if (stylesheet) {
            stylesheet.disabled = true;
        }
    } else {
        if (stylesheet) {
            stylesheet.disabled = false;
        }
    }
}
window.addEventListener('load', updateStylesheetVisibility);
window.addEventListener('resize', updateStylesheetVisibility);