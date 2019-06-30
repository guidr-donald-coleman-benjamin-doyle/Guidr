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

//Changing color of placeholder
let newColor = document.getElementsByTagName("input");


newColor[0].addEventListener('mouseover',
  function () {
    this.classList.add('input-text');
  }
);

newColor[1].addEventListener('mouseover',
  function () {
    this.classList.add('input-text');
  }
);

newColor[0].addEventListener('mouseout',
  function () {
    this.classList.remove('input-text');
  }
);

newColor[1].addEventListener('mouseout',
  function () {
    this.classList.remove('input-text');
  }
);