// DOM elements
let albumImageContainer = document.querySelectorAll('.album-image');
let albumImage = document.querySelectorAll('.album-image img');
let albumContainer = document.querySelector('.album-content');
// changing image container width
let changeImg = () => {
    if (window.innerWidth > 1000) {
        albumImageContainer.forEach((img) => {
            img.style.width = `${(albumContainer.clientWidth - 40) / 3}px`;
        });
        // changing image width
        albumImage.forEach((img) => {
            img.style.width = `${(albumContainer.clientWidth - 40) / 3}px`;
        });
    }
    else if (window.innerWidth < 1000 && window.innerWidth > 500) {
        albumImageContainer.forEach((img) => {
            img.style.width = `${(albumContainer.clientWidth - 40) / 2}px`;
        });
        // changing image width
        albumImage.forEach((img) => {
            img.style.width = `${(albumContainer.clientWidth - 40) / 2}px`;
        });
    }
    else {
        albumImageContainer.forEach((img) => {
            img.style.width = `${(albumContainer.clientWidth - 40)}px`;
        });
        // changing image width
        albumImage.forEach((img) => {
            img.style.width = `${(albumContainer.clientWidth - 40)}px`;
        });
    }
}
changeImg();