class Game {
  constructor(player1, player2, cards) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.centerPile = [];
    this.cards = cards;
  }

  // editCardName() {
  //   for (var i = 0; i < this.cards.length; i++) {
  //     console.log(this.cards[i].slice(12));
  //   }
  // }

  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  shuffleDeck() {
    for (var i = this.cards.length - 1; i >= 0; i--) {
      var randomNumber = this.getRandomIndex(this.cards);
      var cardAtIndex = this.cards[randomNumber];
      this.cards[randomNumber] = this.cards[i];
      this.cards[i] = cardAtIndex;
    }
      return this.cards;
  }

  dealCards() {
    player1.hand = this.cards.splice(0, 24);
    player2.hand = this.cards.splice(0, 24);
  }

  turnHandler() {
    if (player1.hand !== [] && player2.hand !== []) {
      alternateTurns();
    } else if (player1.hand === [] || player2.hand === [])
      finalChance();
    }

  alternateTurns() {
    if (this.currentPlayer === player1) {
      this.currentPlayer = player2;
    } else {
      this.currentPlayer = player1;
    }
  }

  finalChance() {
    this.currentPlayer = currentPlayer;
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
      // this.currentPlayer.playCard();

    }
  }

  gameSetUp() {
    // this.editCardName(cards);
    this.shuffleDeck();
    this.dealCards();
  }

  updateWins() {

  }

  resetDeck() {
// newgame
  }

}
