const menuIcon = document.getElementById('menu-icon');
const slideOutMenu = document.getElementById('slideout-menu');

menuIcon.addEventListener('click', function() {
    if (slideOutMenu.style.opacity == "1") {
        slideOutMenu.style.opacity = "0";
        slideOutMenu.style.pointerEvents = "none";
        menuIcon.style.color = 'rgb(49, 60, 61)'
    } else {
        slideOutMenu.style.opacity = "1";
        slideOutMenu.style.pointerEvents = "auto";
        menuIcon.style.color = 'white'
    }

})