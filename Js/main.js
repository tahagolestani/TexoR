const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");
const navButton = document.querySelector(".nav__menu .nav__button");


// Open / Close Menu

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});


// Close Menu After Clicking a Link

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});


// Close Menu After Clicking Let's Talk

if (navButton) {

    navButton.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

}


// Close Menu When Window Gets Bigger

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

});