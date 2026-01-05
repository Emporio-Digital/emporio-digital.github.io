document.addEventListener('DOMContentLoaded', () => {
    
    // Animação de entrada
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Lógica do Modal de Ebooks
    const modal = document.getElementById('ebook-modal');
    const openBtn = document.getElementById('open-ebooks');
    const closeBtn = document.getElementById('close-modal');

    // Verifica se os elementos existem antes de adicionar o evento (evita erros)
    if(openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});