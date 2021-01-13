var player1 = new Player("player1");
var player2 = new Player("player2");

class Game {
  constructor() {
    this.currentPlayer = player1;
  }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  shuffleDeck(cards) {
    for (var i = cards.length - 1; i >= 0; i--) {
      var randomNumber = this.getRandomIndex(cards);
      var cardAtIndex = cards[randomNumber];
      cards[randomNumber] = cards[i];
      cards[i] = cardAtIndex;
    }
      return cards;
  }

  dealCards() {
    player1.hand.push(cards.splice(0, 24));
    player2.hand.push(cards.splice(0, 24));
  }

  alternateTurns() {
    if (this.currentPlayer === player1) {
      this.currentPlayer = player2;
    } else {
      this.currentPlayer = player1;
    }
  }

  addToCenterPile() {

  }

  slap() {

  }

  updateWins() {

  }

  resetDeck() {
// newgame
  }

}


var centerPile = [];
