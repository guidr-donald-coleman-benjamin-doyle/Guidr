class Tablink {
  constructor(tabElement) {
    this.i = 0;
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;

    this.add();
    this.remove();

    tabs[this.i].addEventListener("click", () => {
      this.selectTab();
      this.selectCard();
      this.i + 1;
    })
  }
  add() {
    cards[this.i].classList.add('active-tab');
    cards[this.i].classList.remove('not-active');
    tabs[this.i].classList.add('active-tab');
  }

  remove() {
    cards[this.i + 1].classList.add('not-active');
    cards[this.i + 1].classList.remove('active-tab');
    tabs[this.i + 1].classList.remove('active-tab');
  }

  selectCard() {
    if (this.i === 0) {
      cards[this.i].classList.add("card");
      cards[this.i].classList.remove("not-active");
      this.i = 1;
      cards[this.i].classList.add("not-active");
      cards[this.i].classList.remove("card");

    } else {
      cards[this.i].classList.add("card");
      cards[this.i].classList.remove("not-active");
      this.i = 0;
      cards[this.i].classList.add("not-active");
      cards[this.i].classList.remove("card");
    }
  }

  selectTab() {
    if (this.i === 0) {
      tabs[this.i].classList.add("active-tab");
      tabs[this.i + 1].classList.remove("active-tab");
    } else {
      tabs[this.i].classList.add("active-tab");
      tabs[this.i - 1].classList.remove("active-tab");

    }
  }
}




let tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => new Tablink(tab));