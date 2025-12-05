const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const cta = document.querySelector('.cta-button');

hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    cta.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 777) {
            e.preventDefault();
            const dropdown = item.closest('.dropdown');
            dropdown.classList.toggle('active');
        }
    });
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.closest('.faq-item');
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
        faqItem.classList.toggle('active');
    });
});

const caseCards = document.querySelectorAll(".case-card");
const prevBtn = document.querySelector(".case-btn.prev");
const nextBtn = document.querySelector(".case-btn.next");

let caseIndex = 0;

function showCase(i) {
  caseCards.forEach(c => c.classList.remove("active"));
  caseCards[i].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  caseIndex = (caseIndex - 1 + caseCards.length) % caseCards.length;
  showCase(caseIndex);
});

nextBtn.addEventListener("click", () => {
  caseIndex = (caseIndex + 1) % caseCards.length;
  showCase(caseIndex);
});

showCase(caseIndex);