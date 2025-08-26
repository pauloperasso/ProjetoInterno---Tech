// Contador animado
const counters = document.querySelectorAll(".numero");

counters.forEach((counter) => {
  const target = parseFloat(counter.getAttribute("data-target")); // pega número do atributo
  const isDecimal = target % 1 !== 0; // se for decimal (ex: 9.9)

  let count = 0;
  const increment = target / 100; // velocidade

  // garantir opacidade visível antes da animação
  counter.style.opacity = 1;

  const interval = setInterval(() => {
    count += increment;

    if (count >= target) {
      // valor final
      counter.innerHTML =
        target +
        (counter.innerHTML.includes("/10")
          ? "<span class='barra'>/10</span>"
          : "");
      clearInterval(interval);
    } else {
      // arredondamento (decimais se necessário)
      counter.innerHTML = isDecimal ? count.toFixed(1) : Math.floor(count);
    }
  }, 30);
});

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

setInterval(nextSlide, 3000); // troca a cada 3s
// Função para animar os números
function animateCounters() {
  const counters = document.querySelectorAll(".count");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target"); // valor final
    let current = 0;
    const increment = Math.ceil(target / 100); // passo da animação
    const speed = 20; // velocidade em ms

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        if (current > target) current = target; // evita passar do limite
        counter.textContent = current;
        setTimeout(updateCounter, speed);
      }
    };

    updateCounter();
  });
}

// Garante que a animação só roda depois do carregamento da página
window.addEventListener("load", animateCounters);
