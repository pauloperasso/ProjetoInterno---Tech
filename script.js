window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel img");
  let index = 0;

  setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 7000); // 7000 ms = 7 segundos
});
