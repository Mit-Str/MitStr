document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseover', function () {
        logo.style.transform = 'rotate(360deg)';
    });
    logo.addEventListener('mouseout', function () {
        logo.style.transform = 'rotate(0deg)';
    });
});