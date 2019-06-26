let introDiv = document.querySelector('.text-content');
let introName = document.querySelector('.intro-title');
let introInfo = document.querySelector('.intro-info');
introDiv.style.height = `${introName.clientHeight + introInfo.clientHeight}px`;