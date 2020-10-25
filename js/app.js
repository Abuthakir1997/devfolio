var jumbotronTweak = document.querySelector(".jumbotrons");
const lead = document.querySelector(".lead-1");
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var sticky = document.querySelector(".sticky");
    var logo = document.querySelector(".logo");
    var underline = document.querySelector(".underline");
    var navbarBrand = document.querySelector(".navbar-brand");



    if (window.scrollY > 0) {
        navbar.classList.toggle("sticky", window.scrollY > 0);
        underline.classList.toggle("nav-tweak", window.scrollY > 0);
        jumbotronTweak.classList.toggle("jumbotrons-tweaks", window.scrollY > 0);
        sticky.style.position = "fixed";
        logo.style.color = "#007bff";
        navbarBrand.style.padding = "0";


    }
    else {
        navbar.classList.toggle("sticky", window.scrollY > 0);
        logo.style.color = "rgba(255,255,255)";
        underline.classList.toggle("nav-tweak", window.scrollY > 0);
        underline.classList.toggle("jumbotrons", window.scrollY > 0);
        jumbotronTweak.classList.toggle("jumbotrons-tweaks", window.scrollY > 0);



    }

});

lead.addEventListener("mouseenter", (e) => {
    lead.textContent = "iam abu";
    lead.style.transform = "rotateY(360deg) rotateX(0deg)";
    lead.style.transition = "2s";

});

lead.addEventListener("mouseout", (e) => {

    lead.textContent = "web developer";
    lead.style.transform = "rotateY(0deg) rotateX(0deg)";
    lead.style.transition = "2s";

});







