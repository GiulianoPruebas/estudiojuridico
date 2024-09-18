function openPopup() {
    if (!localStorage.getItem('popupShown')) {
        const popup = document.getElementById('popup');
        const content = document.querySelector('.contenedor');

        popup.style.display = 'flex';
        content.classList.add('content-blur');

        localStorage.setItem('popupShown', 'true');

        setTimeout(function() {
            popup.style.display = 'none';
            content.classList.remove('content-blur');
            window.location.href = 'index.html';
        }, 10000); 
    }
}
document.getElementById('close-popup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    const content = document.querySelector('.contenedor');

    popup.style.display = 'none';
    content.classList.remove('content-blur');
});
window.addEventListener('load', openPopup);