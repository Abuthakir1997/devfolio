window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var sticky = document.querySelector(".sticky");
    var logo = document.querySelector(".logo");
    var underline = document.querySelector(".underline");

    if (window.scrollY > 0) {
        navbar.classList.toggle("sticky", window.scrollY > 0);
        underline.classList.toggle("nav-tweak", window.scrollY > 0);
        sticky.style.position = "fixed";
        logo.style.color = "#007bff";
    }
    else {
        navbar.classList.toggle("sticky", window.scrollY > 0);
        logo.style.color = "rgba(255,255,255)";
        underline.classList.toggle("nav-tweak", window.scrollY > 0);
        underline.classList.toggle("", window.scrollY > 0);


    }

});





