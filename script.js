document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("click", () => {
  document.querySelectorAll(".nav-item").classList.remove(".myactive");
  document.querySelector(".nav-item").classList.add(".myactive");
});
