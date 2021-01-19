var centerPile = document.querySelector(".middle-card-container");
var p1Stack = document.querySelector(".p1-card-stack")
var p2Stack = document.querySelector(".p2-card-stack")
var playedCard = document.querySelector(".current-card");
var subheader = document.querySelector(".subheader");
var p1Score = document.querySelector(".player-one-score");
var p2Score = document.querySelector(".player-two-score");

window.addEventListener("load", onLoad());
document.addEventListener("keydown", function(event) {
  if (event.key === "q" && game.currentPlayer === game.player1) {
    playCard(game.player1);
  }
  else if (event.key === "p" && game.currentPlayer === game.player2) {
    playCard(game.player2);
  }
  else if (event.key === "f") {
    playerSlapped(game.player1, game.player2);
  }
  else if (event.key === "j") {
    playerSlapped(game.player2, game.player1);

  }
});

var game;

function loadGame() {
  game = new Game(cards);
}

function resetGame() {
  game = new Game(cards, game.player1, game.player2)
}

function onLoad(){
  loadGame();
  game.gameSetUp();
}

function addClass(element, style) {
  element.classList.add(style);
}

function removeClass(element, style) {
  element.classList.remove(style);
}

function centerPileVisibility() {
  if (game.centerPile.length === 0) {
    addClass(centerPile, "hidden");
  } else {
    removeClass(centerPile, "hidden");
  }
}

function centerPileColor() {
  if (game.currentPlayer === game.player1) {
    removeClass(playedCard, "p2-shadow");
    addClass(playedCard, "p1-shadow");
  } else if (game.currentPlayer === game.player2) {
    removeClass(playedCard, "p1-shadow");
    addClass(playedCard, "p2-shadow");
  }
}

function playerPileVisibility() {
  if (game.player1.hand.length === 0) {
    addClass(p1Stack, "hidden");
    game.activateSuddenDeath;
  } else if (game.player2.hand.length === 0) {
    addClass(p2Stack, "hidden");
    game.activateSuddenDeath;
  } else {
    removeClass(p1Stack, "hidden");
    removeClass(p2Stack, "hidden");
  }
}

function showCurrentCard() {
  playedCard.src = game.centerPile[0].imgsrc;
}

function gamePlay() {
  addClass(subheader, "hidden");
  game.addToCenterPile();
  centerPileVisibility();
  centerPileColor();
  showCurrentCard();
  playerPileVisibility();
}

function playCard(player) {
  if (game.suddenDeath === false) {
    gamePlay();
    game.alternateTurns();
  } else if (game.suddenDeath === true) {
    removeClass(centerPile, "hidden");
    gamePlay();
  }
}


function playerSlapped(slappee, unslappee) {
  game.whoSlapped(slappee, unslappee);
  if (game.suddenDeath === false) {
    game.slap();
    slapOutcome()
  } else if (game.suddenDeath === true) {
    game.suddenDeathSlap();
    suddenDeathOutcome();
  }
}

function slapOutcome() {
  if (game.centerPile.length === 0) {
    centerPileVisibility();
    updateSubheader();
  } else if (game.centerPile.length >= 1) {
    updateSubheader();
  }
}

function suddenDeathOutcome() {
  if (game.won === true) {
    updateSubheader();
    updateScore(game.slapper.wins, game.slapper.id);
  } else if (game.won === false) {
    updateSubheader();
    playerPileVisibility();
  }
}

function updateSubheader() {
  removeClass(subheader, "hidden");
  if (game.centerPile.length === 0) {
    subheader.innerText = `${game.gameMessage} ${game.slapper.id} takes the pile!`;
  } else if (game.centerPile.length >= 1 && game.won === false) {
    subheader.innerText = `${game.gameMessage} ${game.slapper.id} loses a card!`;
  } else if (game.won === true) {
    subheader.innerText = `${game.gameMessage} ${game.slapper.id} wins the game!`;
  } else if (game.won === false && game.centerPile[0].value === 11 && game.slapper !== game.currentPlayer) {
    subheader.innerText = `${game.gameMessage}`;
  }
}

function updateScore(scoreName, winnerName) {
  scoreName.innerText = `winnerName Wins`;
}
