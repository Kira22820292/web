// Espera a que el contenido del DOM se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces del menú
    const menuLinks = document.querySelectorAll("#menu a");

    // Agrega un evento de clic a cada enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el id del destino desde el atributo href del enlace
            const targetId = this.getAttribute("href").substring(1);

            // Selecciona la sección correspondiente al id
            const targetSection = document.getElementById(targetId);

            // Desplaza suavemente la página hasta la sección objetivo
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
