function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className == "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu"
    }
}

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "75px";
        navHeader.style.lineHeight = "75px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "75px";
        navHeader.style.lineHeight = "75px";
    }
}

window.onscroll = function () {
    headerShadow()
}

const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2000,
    reset: true
})

sr.reveal(".greeting", {});
sr.reveal(".name", {
    interval: 16,
    reset: true
});
sr.reveal(".description", {
    interval: 16,
    reset: true
})
sr.reveal(".button", {
    interval: 16,
    reset: true
})
sr.reveal(".introduce-image", {
    interval: 16,
    reset: true
})
sr.reveal(".project-box", {
    interval: 16,
    reset: true
})
sr.reveal(".about-header", {
    interval: 16,
    reset: true
})
sr.reveal(".project-header", {
    interval: 16,
    reset: true
})
sr.reveal(".skill-header", {
    interval: 16,
    reset: true
})

const srTop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
})

srTop.reveal(".image-about", {
    interval: 16,
    reset: true
})
srTop.reveal(".desc-heading", {
    interval: 16,
    reset: true
})
srTop.reveal(".desc-certificate", {
    interval: 16,
    reset: true
})

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})

srLeft.reveal('.skill-info', {
    interval: 16,
    reset: true
})

const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
})

srRight.reveal(".pack", {
    interval: 16,
    reset: true
})

const section = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll", scrollActive)

document.addEventListener("DOMContentLoaded", function () {
    function handleMenuClick(event) {
        event.preventDefault();

        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: "smooth"
        })
    }

    var menuLinks = document.querySelectorAll(".nav-link");

    menuLinks.forEach(function () {
        this.links.addEventListener("click", handleMenuClick);
    })
})