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

    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; 
    }

    if(openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
