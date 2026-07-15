document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  const menuLinks = document.querySelectorAll(".nav-links a");
  const year = document.querySelector("#copyright-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }
});
