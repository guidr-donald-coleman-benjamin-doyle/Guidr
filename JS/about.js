class TabLink {
  constructor(e) {
    this.e = e;
    this.data = this.e.dataset.tab;
    this.itemElement = document.querySelector(`.card[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.e.addEventListener('click', (event) => {
      this.select();
    });
  };

  select() {
    const tabs = document.querySelectorAll('.person');
    Array.from(tabs).forEach((e) => {
      e.classList.remove('person-selected');
    });
    this.e.classList.add('person-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(e) {
    this.e = e;
  }

  select() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.remove('card-selected');
    })
    this.e.classList.add('card-selected');
  }
}

tabs = document.querySelectorAll('.person').forEach(tab => new TabLink(tab));