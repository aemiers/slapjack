class Game {
  constructor() {
    this.currentPlayer = player1;
    this.centerPile = [];
  }

  editCardName(cards) {
    for (var i = 0; i < cards.length; i++) {
      console.log(cards[i].slice(12));
    }
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
    player1.hand = cards.splice(0, 24);
    player2.hand = cards.splice(0, 24);
  }

  alternateTurns() {
    if (this.currentPlayer === player1) {
      this.currentPlayer = player2;
    } else {
      this.currentPlayer = player1;
    }
  }

  finalChance() {
    if (player1.hand === [] || player2.hand === []) {
      
    }
  }

  addToCenterPile() {
    this.centerPile.unshift(this.currentPlayer.playCard());
  }

  slap() {
    if (this.centerPile[0].includes("jack") || this.centerPile[0] === this.centerPile[1] || this.centerPile[0] === this.centerPile[2]) {
      this.shuffleDeck(this.centerPile);
      this.currentPlayer.hand = this.currentPlayer.hand.concat(this.centerPile);
      this.centerPile = [];
    } else {

    }
  }

  updateWins() {

  }

  resetDeck() {
// newgame
  }

}
var player1 = new Player("player1");
var player2 = new Player("player2");
