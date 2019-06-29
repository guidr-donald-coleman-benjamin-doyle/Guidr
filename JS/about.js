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

let tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => new Tablink(tab));


