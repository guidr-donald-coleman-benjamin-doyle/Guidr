let albumImageContainer = document.querySelectorAll('.album-image');
let albumImage = document.querySelectorAll('.album-image img');
let albumContainer = document.querySelector('.album-content');
// changing image container width
albumImageContainer.forEach((img) => {
    img.style.width = `${(albumContainer.clientWidth - 40) / 3}px`;
});
// changing image width
albumImage.forEach((img) => {
    img.style.width = `${(albumContainer.clientWidth - 40) / 3}px`;
});