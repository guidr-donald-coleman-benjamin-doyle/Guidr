let navBar = document.querySelector('header nav');
let container = document.querySelector('.resume-container');
let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        navBar.style.padding = '20px 0'
    }
});