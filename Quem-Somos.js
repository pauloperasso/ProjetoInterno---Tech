// Carrossel com dots
const slides = document.querySelectorAll(".carousel img");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides.forEach((s, idx) => {
    s.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// Inicializa o carrossel 
if (slides.length > 0) {
    showSlide(index);
}

// Adiciona event listeners para os pontos (dots)
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        index = idx;
        showSlide(index);
    });
});

setInterval(nextSlide, 5000); // troca a cada 5s

// Função para animar os números
function animateCounters() {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target"); // valor final
    let current = 0;
    
    const isDecimal = target % 1 !== 0; 
    const increment = isDecimal ? 0.1 : Math.ceil(target / 100);
    const speed = 15;
    
    if (parseFloat(counter.textContent) === target) return;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        if (current >= target) current = target; // Garante que não ultrapasse
        
        // Formatação do texto
        let displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);
        
        const hasPlus = counter.nextSibling && counter.nextSibling.textContent.trim() === '+';

        if (isDecimal) {
            counter.textContent = displayValue;
        } else if (hasPlus) {
            counter.textContent = displayValue;
        } else {
            counter.textContent = displayValue;
        }
        
        setTimeout(updateCounter, speed);
      }
    };
    
    counter.textContent = isDecimal ? '0.0' : '0';
    updateCounter();
  });
}

// Garante que a animação só roda depois do carregamento da página
window.addEventListener("load", animateCounters);

const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const cta = document.querySelector('.cta-button');

    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      cta.classList.toggle('active');
      hamburger.classList.toggle('active');

      // Alterna o ícone entre Barras e X
      if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });