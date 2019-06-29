class Tablink {
  constructor(e) {
    // set starting tab and card
    this.i = 0;
    this.add();
    this.remove();

    // tab is clicked
    e.addEventListener('click', () => {
      this.left();
  });
  }

  add() {
  
  }

  remove() {
    
  }

  selectCard() {
    if (this.i === 0) {

    } 
    else {
  
    }
  }

  selectTab() {
    if (this.i === 0) {
      
    } 
    else {
      
    }
  }
}

// declare nodelist
let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".card");

// create new instance of class
tabs.forEach(e => new Tablink(e));