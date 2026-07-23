/*=========================================
    LUMABRIDGE CONTACT PAGE
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=============================
        MOBILE MENU
    =============================*/

    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    if (hamburger) {

        hamburger.addEventListener("click", function () {

            hamburger.classList.toggle("active");
            navbar.classList.toggle("active");

        });

    }

    /*=============================
        CLOSE MENU
    =============================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", function () {

            hamburger.classList.remove("active");
            navbar.classList.remove("active");

        });

    });

    /*=============================
        STICKY HEADER
    =============================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
            header.style.transition = ".35s";

        } else {

            header.style.boxShadow = "0 3px 12px rgba(0,0,0,.05)";

        }

    });

    /*=============================
        CONTACT FORM
    =============================*/

    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    input.style.borderColor = "#ff3b30";
                    valid = false;

                } else {

                    input.style.borderColor = "#ddd";

                }

            });

            if (!valid) {

                alert("Please complete all required fields.");

                return;

            }

            alert("Thank you! Your message has been sent successfully.");

            form.reset();

        });

    }

    /*=============================
        HERO ANIMATION
    =============================*/

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(function () {

            hero.style.transition = ".8s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        }, 200);

    }

    /*=============================
        SCROLL REVEAL
    =============================*/

    const revealItems = document.querySelectorAll(

        ".contact-info, .contact-form, .contact-cta"

    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    revealItems.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});