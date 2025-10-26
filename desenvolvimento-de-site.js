document.addEventListener("DOMContentLoaded", function() {
  
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  

  if (hamburger && navMenu) {
    const hamburgerIcon = hamburger.querySelector('i');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');  
      hamburger.classList.toggle('open');
      
      if (hamburger.classList.contains('open')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark'); 
      } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
      }
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');

    if (questionButton) {
      questionButton.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    }
  });

});