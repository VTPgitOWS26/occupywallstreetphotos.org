document.addEventListener("DOMContentLoaded", () => {

  // Header changes when scrolling
  const header = document.querySelector(".site-header");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mobile menu
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {

      const open = menu.classList.toggle("is-open");

      menuButton.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

      link.addEventListener("click", () => {

        menu.classList.remove("is-open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });
  }

  // Copyright year
  const year = document.getElementById("copyright-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
