document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos que devem ser animados
    const elementsToAnimate = document.querySelectorAll('.fade-in');

    // Configura o "Observador" (Intersection Observer)
    // Ele avisa quando o elemento entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Se o elemento está visível na tela
            if (entry.isIntersecting) {
                // Adiciona a classe que faz ele aparecer
                entry.target.classList.add('visible');
                // Para de observar (anima só uma vez)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Dispara quando 10% do elemento estiver visível
    });

    // Manda o observador vigiar cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});