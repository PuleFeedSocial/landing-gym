document.addEventListener('DOMContentLoaded', () => {
    const animElements = document.querySelectorAll(
        '.servicios .pregunta, .planes .plan, .comentarios-contenedor .comentario, .preguntas .pregunta'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('anim-fade-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    animElements.forEach((el) => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    document.querySelectorAll('.principal h1, .comentarios-textos, .preguntas-titulo').forEach((el) => {
        el.style.opacity = '0';
        el.classList.add('anim-fade-in');
    });
});
