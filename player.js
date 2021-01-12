class Player {
  constructor() {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard() {

  }

  saveWinsToStorage{
    var stringifiedWins = JSON.stringify(wins);
    localStorage.setItem('totalWins', stringifiedWins);
  }
}

module.exports = Player;
