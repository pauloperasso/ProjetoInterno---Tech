document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.carousel-card');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    let intervalId;
    const cardWidth = cards[0].offsetWidth + 20; // Largura do card + margem
    const cardsPerSlide = 3; // Mostrar 3 cards por vez
    
    // Criar dots dinamicamente - AGORA SEMPRE 2 DOTS PARA 6 CARDS
    function createDots() {
        dotsContainer.innerHTML = ''; // Limpa dots antigos
        
        // Para 6 cards e 3 por slide, isso sempre será 2
        const dotCount = Math.ceil(cards.length / cardsPerSlide);
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Mover para um slide específico
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Atualizar a posição do carrossel
    function updateCarousel() {
        const offset = -currentIndex * cardWidth * cardsPerSlide;
        track.style.transform = `translateX(${offset}px)`;
        
        // Atualizar dots ativos
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }
    
    // Avançar para o próximo slide
    function nextSlide() {
        const totalSlides = Math.ceil(cards.length / cardsPerSlide);
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
    
    // Iniciar autoplay
    function startAutoplay() {
        intervalId = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
    }
    
    // Parar autoplay quando o mouse estiver sobre o carrossel
    function pauseAutoplay() {
        clearInterval(intervalId);
    }
    
    // Inicializar o carrossel
    function initCarousel() {
        createDots();
        startAutoplay();
        
        // Pausar autoplay no hover
        const container = document.querySelector('.carousel-container');
        container.addEventListener('mouseenter', pauseAutoplay);
        container.addEventListener('mouseleave', startAutoplay);
    }
    
    initCarousel();
});