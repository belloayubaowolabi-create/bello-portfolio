const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close the menu
menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close the menu when a navigation link is clicked
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});