// DOM elements
let expandButton = document.querySelectorAll('.card-link');
let closeButton = document.querySelector('.i-card-close');
let tripPopup = document.querySelector('.individual-trip-card');
let cards = document.querySelectorAll('.card');
let popupImg = document.querySelector('.i-trip-image');
let popupTitle = document.querySelector('.i-trip-title');
let popupLocation = document.querySelector('.i-trip-location');

// button clicked
expandButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        tripPopup.style.display = 'block';
        let img = document.querySelector(`.trip-image[data-number="${btn.dataset.number}"]`);
        let title = document.querySelector(`.trip-title[data-number="${btn.dataset.number}"]`);
        let location = document.querySelector(`.trip-location[data-number="${btn.dataset.number}"]`);
        popupImg.src = img.src;
        popupTitle.textContent = title.textContent;
        popupLocation.textContent = location.textContent;
    });
});
closeButton.addEventListener('click', () => {
    tripPopup.style.display = 'none';
});

// DOM elements
let tripCardContainer = document.querySelector('.trips-content');
let iTripCardContainer = document.querySelector('.i-trips-content');
let tripCard = document.querySelectorAll('.card');

// determine width of cards
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

// filter trips based on category
class Tab {
    constructor(e){
        this.e = e;
        this.tabData = this.e.dataset.tab;
        
        if (this.tabData === 'all') {
            this.cards = document.querySelectorAll('.card');
        } 
        else {
            this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
        }
        this.cards = Array.from(this.cards).map(card => new Card(card));
        this.e.addEventListener('click', () => {
            this.selectTab();
        });
    }
  
    selectTab(){
        let tabs = document.querySelectorAll('.trip-category');
        tabs.forEach(tab => tab.classList.remove('trip-category-selected'));
        let cards = document.querySelectorAll('.card');
        
        cards.forEach((card) => {
            card.style.display = 'none';
        })
        this.e.classList.add('trip-category-selected');
        this.cards.forEach(card => card.selectCard());
    }
  }
  
  class Card {
        constructor(e) {
        this.e = e;
        }
        selectCard() {
        this.e.style.display = 'flex';
        }
  }
  
  // declare DOM element and create new instance of Tab class
  let tabs = document.querySelectorAll('.trip-category');  
  tabs.forEach(tab => new Tab(tab));