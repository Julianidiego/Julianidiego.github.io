// Agregar funcionalidad para el formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita el envío tradicional del formulario
        alert("Gracias por tu mensaje. Me pondré en contacto contigo pronto.");
        form.reset(); // Limpia el formulario
    });
});
