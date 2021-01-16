class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
    var playedCard = this.hand.shift();
    return playedCard;
  }

  saveWinsToStorage() {
    // var stringifiedWins = JSON.stringify(wins);
    // localStorage.setItem('totalWins', stringifiedWins);
  }
}
