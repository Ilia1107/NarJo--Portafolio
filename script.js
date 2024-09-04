document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const { top, bottom } = section.getBoundingClientRect();
            
            if (top < windowHeight && bottom > 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on load
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.blue-box-section');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Para el caso en que ya esté visible al cargar la página
});
