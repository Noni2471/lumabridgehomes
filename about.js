document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.classList.toggle("active");
      navMenu.classList.toggle("show");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 992) {
          menuToggle.classList.remove("active");
          navMenu.classList.remove("show");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Newsletter subscription submitted.");
    });
  }
});