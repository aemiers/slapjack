class Game {
  constructor(cards, player1, player2) {
    this.player1 = player1 || new Player("Player 1");
    this.player2 = player2 || new Player("Player 2");
    this.currentPlayer = this.player1;
    this.centerPile = [];
    this.cards = cards;
    this.slapper = this.player1;
    this.unslapper = this.player2;
    this.gameMessage = "ERROR!";
    this.suddenDeath = false;
    this.winner = "";
    this.won = false;
  }

  gameSetUp() {
    this.shuffleDeck();
    this.dealCards();
  }

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
    this.player1.hand = this.cards.splice(0, 26);
    this.player2.hand = this.cards.splice(0, 26);
  }

  turnHandler() {
    if (this.player1.hand !== [] && this.player2.hand !== []) {
      this.alternateTurns();
    } else if (this.player1.hand === []) {
      this.currentPlayer = this.player2;
      this.suddenDeath = true;
      console.log("game 45")
    } else if (this.player2.hand === []) {
      this.currentPlayer = this.player1;
      this.suddenDeath = true;
      console.log("game 49")
    }
  }

  alternateTurns() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
      console.log("player 2's turn game 67")
    } else {
      this.currentPlayer = this.player1;
    }
  }

  addToCenterPile() {
    this.centerPile.unshift(this.currentPlayer.playCard());
    console.log(this.centerPile);
    console.log(this.player1.hand);
  }

  whoSlapped(hare, tortoise) {
    this.slapper = hare;
    this.unslapper = tortoise;
    console.log("who slapped function")
  }

  addCenterPileToSlapper() {
    this.slapper.hand = this.slapper.hand.concat(this.centerPile);
  }

  resetCenterPile() {
    this.centerPile = [];
  }

  slapWinScenario() {
    this.shuffleDeck(this.centerPile);
    this.addCenterPileToSlapper();
    this.resetCenterPile();
    this.currentPlayer = this.unslapper;
  }

  slapPunishment() {
    this.unslapper.hand.push(this.slapper.playCard());
  }

  slap() {
    if (this.centerPile[0].value === 11) {
      this.slapWinScenario();
      this.gameMessage = "SLAPJACK!";
    } else if (this.centerPile.length > 1 && this.centerPile[0].value === this.centerPile[1].value) {
      this.slapWinScenario();
      this.gameMessage = "DOUBLE!!";
    } else if (this.centerPile.length > 2 && this.centerPile[0].value === this.centerPile[2].value) {
      this.slapWinScenario();
      this.gameMessage = "SANDWICH!";
    } else if (this.centerPile.length <= 1 && this.centerPile[0].value !== 11) {
      this.slapPunishment();
      this.gameMessage = "YOU CAN'T DO THAT!";
    } else {
      this.slapPunishment();
      this.gameMessage = "YOU CAN'T DO THAT!";
    }
  }

  activateSuddenDeath() {
    console.log("suddendeath activated")
    this.suddenDeath = true;
  }

  suddenDeathSlap() {
    if (this.centerPile[0].value === 11 && this.slapper === this.currentPlayer) {
      console.log("game 123")
      this.winner = this.slapper;
      this.gameWin();
    } else if (this.centerPile[0].value !== 11 && this.slapper === this.currentPlayer) {
      console.log("game 126")
      this.gameMessage = "FALSE SLAP! Penalty card to other player!"
      this.suddenDeath = false;
      this.slapPunishment();
    } else if (this.centerPile[0].value === 11 && this.slapper !== this.currentPlayer) {
      console.log("game 131")
      this.gameMessage = "Back in the game!";
      this.suddenDeath = false;
      this.slapWinScenario();
    } else if (this.centerPile[0].value !== 11 && this.slapper !== this.currentPlayer) {
      console.log("game 136");
      this.winner = this.unslapper;
      this.gameWin();
    } else if (this.player1.hand.length === 0 & this.player2.hand.length === 0) {
      draw();
    }
  }

  gameWin(){
    console.log("128");
    this.won = true;
    this.gameMessage = "WE HAVE A WINNER!";
    this.updateWins();
    this.winner.saveWinsToStorage();
  }

  updateWins() {
    this.winner.wins += 1;
  }

  resetDeck() {
// newgame
  }

  draw() {
    this.gameMessage = "Draw!";
  }
}
