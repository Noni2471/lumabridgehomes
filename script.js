const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  siteNav.classList.toggle("show");
  const expanded = menuToggle.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", expanded);
});

// close menu when clicking a nav link on mobile
document.querySelectorAll("#siteNav a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1100) {
      menuToggle.classList.remove("active");
      siteNav.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// close menu on resize if desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 1100) {
    menuToggle.classList.remove("active");
    siteNav.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Featured properties section ready for future interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Featured Properties section loaded successfully.");

  document.querySelectorAll(".property-btn").forEach(btn => {
    btn.addEventListener("click", event => {
      event.preventDefault();
      const card = btn.closest(".property-card");
      const details = card.querySelector(".property-details");
      const isOpen = card.classList.toggle("details-open");
      details.setAttribute("aria-hidden", String(!isOpen));
      btn.textContent = isOpen ? "HIDE DETAILS" : "VIEW DETAILS";
    });
  });

  // Toggle showing the extra properties when 'View All Properties' is clicked
  const viewAllLink = document.querySelector('.view-all-link');
  const propertiesGrid = document.querySelector('.properties-grid');
  if (viewAllLink && propertiesGrid) {
    viewAllLink.addEventListener('click', (e) => {
      e.preventDefault();
      const expanded = propertiesGrid.classList.toggle('show-all');
      viewAllLink.setAttribute('aria-expanded', expanded);
      viewAllLink.innerHTML = (expanded ? 'HIDE PROPERTIES' : 'VIEW ALL PROPERTIES') + ' <span class="arrow">→</span>';
    });
  }

});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Lumabridge invest section loaded.");
});

document.addEventListener("DOMContentLoaded", function () {
  const inspectionForm = document.querySelector(".inspection-form");
  const newsletterForm = document.querySelector(".newsletter-form");

  if (inspectionForm) {
    inspectionForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Inspection booking submitted successfully!");
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Newsletter subscription submitted successfully!");
    });
  }
});
