/*==========================================
    LUMABRIDGE SERVICES PAGE
    services.js
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        MOBILE MENU
    =====================================*/

    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    if (hamburger) {

        hamburger.addEventListener("click", () => {

            navbar.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

    }

    /*=====================================
        CLOSE MENU WHEN LINK IS CLICKED
    =====================================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");
            hamburger.classList.remove("active");

        });

    });

    /*=====================================
        STICKY HEADER EFFECT
    =====================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
            header.style.background = "#fff";

        }

        else{

            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.05)";

        }

    });

    /*=====================================
        HERO FADE
    =====================================*/

    const hero = document.querySelector(".hero-content");

    if(hero){

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(()=>{

            hero.style.transition = "all .9s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0px)";

        },300);

    }

    /*=====================================
        SERVICE CARD REVEAL
    =====================================*/

    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>{

        card.classList.add("hidden");

        observer.observe(card);

    });

    /*=====================================
        BUTTON RIPPLE EFFECT
    =====================================*/

    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("click",function(e){

            let circle=document.createElement("span");

            const diameter=Math.max(this.clientWidth,this.clientHeight);

            const radius=diameter/2;

            circle.style.width=circle.style.height=`${diameter}px`;

            circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

            circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

            circle.classList.add("ripple");

            const ripple=this.getElementsByClassName("ripple")[0];

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

    /*=====================================
        NEWSLETTER
    =====================================*/

    const newsletter=document.querySelector(".newsletter form");

    if(newsletter){

        newsletter.addEventListener("submit",(e)=>{

            e.preventDefault();

            const email=newsletter.querySelector("input");

            if(email.value===""){

                alert("Please enter your email.");

                return;

            }

            alert("Thank you for subscribing!");

            newsletter.reset();

        });

    }

    /*=====================================
        SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});