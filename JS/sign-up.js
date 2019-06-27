let leftContainer = document.querySelector('.image-flow'); 
let text = document.querySelector('.image-text-container');
// setting y position
text.style.top = `${(leftContainer.clientHeight - text.clientHeight) / 2}px`;
// setting x position
text.style.left = `${(leftContainer.clientWidth - text.clientWidth) / 2}px`;

let rightContainer = document.querySelector('.sign-up-container'); 
let input = document.querySelector('.signup-form');
// setting y position
input.style.top = `${(rightContainer.clientHeight - input.clientHeight) / 2}px`;
// setting x position
input.style.left = `${(rightContainer.clientWidth - input.clientWidth) / 2}px`;