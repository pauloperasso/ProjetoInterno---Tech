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