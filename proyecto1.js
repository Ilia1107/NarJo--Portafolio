document.addEventListener("DOMContentLoaded", function() {
    // Animación al cargar la página
    const loadElements = document.querySelectorAll('.animate-on-load');
    loadElements.forEach(el => {
        el.classList.add('show');
    });

    // Animación al hacer scroll
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    function checkScroll() {
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Para animar elementos visibles en la carga
});
