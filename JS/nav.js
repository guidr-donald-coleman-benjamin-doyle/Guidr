let navBar = document.querySelector('header nav');
let container = document.querySelector('.resume-container');
let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    if (scrollPosition > 75) {
        navBar.style.padding = '20px 0'
    }
    else {
        navBar.style.padding = '25px 0'
    }
});