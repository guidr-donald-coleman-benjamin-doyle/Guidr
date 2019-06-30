let expandButton = document.querySelectorAll('.card-link');
let closeButton = document.querySelector('.i-card-close');
let tripPopup = document.querySelector('.individual-trip-card');

expandButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        tripPopup.style.display = 'block';
    });
});
closeButton.addEventListener('click', () => {
    tripPopup.style.display = 'none';
});

let tripCardContainer = document.querySelector('.trips-content');
let iTripCardContainer = document.querySelector('.i-trips-content');
let tripCard = document.querySelectorAll('.card');

let checkURL = () => {
    if (window.location.href.indexOf('trips') > -1) {
        tripCard.forEach((card) => {
            card.style.width = `${(iTripCardContainer.clientWidth - 120) / 3}px`;
        })
    }
    else {
        tripCard.forEach((card) => {
            card.style.width = `${(tripCardContainer.clientWidth - 120) / 3}px`;
        })
    }
}
checkURL();