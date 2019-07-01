let menuButton = document.querySelector('.menu-button');
let menuBar = document.querySelector('.menu-bar');
let menuCloseButton = document.querySelector('.menu-icon');

menuButton.addEventListener('click', () => {
  menuBar.style.display = 'block';
})

menuCloseButton.addEventListener('click', () => {
  menuBar.style.display = 'none';
})