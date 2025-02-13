document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies");

    if (localStorage.getItem("cookies-accepted") === "true") {
        cookieBanner.style.display = "none";
    }

    acceptCookiesBtn.addEventListener("click", function () {
        cookieBanner.style.display = "none";
        localStorage.setItem("cookies-accepted", "true");
    });
});
localStorage.removeItem("cookies-accepted");
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
