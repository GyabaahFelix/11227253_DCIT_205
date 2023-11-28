document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', function () {
        // Toggle the visibility of the menu
        mainNav.style.display = (mainNav.style.display === 'block') ? 'none' : 'block';
    });
});
