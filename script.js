const manuBtn = document.getElementById('manuBtn')
const sideNav = document.getElementById('sideNav')
const menu = document.getElementById('menu')
sideNav.style.right = "-250px";
manuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "images/close.png";
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png";

    }
}
// Smoth scrolling js
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});


// Script for preloader

const loader = document.getElementById('preloader');
window.addEventListener("load", function(){
    loader.style.display = "none";
})