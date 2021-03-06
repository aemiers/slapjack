//  ~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~
var centerPile = document.querySelector(".middle-card-container");
var p1Stack = document.querySelector(".p1-card-stack")
var p2Stack = document.querySelector(".p2-card-stack")
var playedCard = document.querySelector(".current-card");
var subheader = document.querySelector(".subheader");
var p1Score = document.querySelector(".player-one-score");
var p2Score = document.querySelector(".player-two-score");

//  ~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~
window.addEventListener("load", onLoad());
document.addEventListener("keydown", function(event) {
  if (event.key === "q" && game.currentPlayer === game.player1) {
    playCard(game.player1);
  } else if (event.key === "p" && game.currentPlayer === game.player2) {
    playCard(game.player2);
  } else if (event.key === "f") {
    playerSlapped(game.player1, game.player2);
  } else if (event.key === "j") {
    playerSlapped(game.player2, game.player1);
  } else if (event.key === "Enter") {
    location.reload();
  }
});
// ~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~
var game;

//  ~~~~~~~~~~~~~~~~~ DOM FUNCTIONS ~~~~~~~~~~~~~~~~~
function loadGame() {
  game = new Game(cards);
}

function onLoad(){
  loadGame();
  game.gameSetUp();
  displayWinsPlayer1();
  displayWinsPlayer2();
}

// Kayla, please see foot note at bottom of this page for following function question

function displayWinsPlayer1() {
  var retrievedData = JSON.parse(localStorage.getItem("Player 1 wins"));
  if (retrievedData) {
    var parsedArray = JSON.parse(retrievedData);
    game.player1.wins = parsedArray;
    displayScoreLocalStorage();
  }
}

function displayWinsPlayer2() {
  var retrievedData = JSON.parse(localStorage.getItem("Player 2 wins"));
  if (retrievedData) {
    var parsedArray = JSON.parse(retrievedData);
    game.player2.wins = parsedArray;
    displayScoreLocalStorage();
  }
}

function displayScoreLocalStorage() {
  p1Score.innerText = `${game.player1.wins} Wins`;
  p2Score.innerText = `${game.player2.wins} Wins`;
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
    game.activateSuddenDeath();
  } else if (game.player2.hand.length === 0) {
    addClass(p2Stack, "hidden");
    game.activateSuddenDeath();
  } else {
    removeClass(p1Stack, "hidden");
    removeClass(p2Stack, "hidden");
  }
}

function showCurrentCard() {
  if (game.centerPile.length === 52) {
    draw();
  } else {
    playedCard.src = game.centerPile[0].imgsrc;
  }
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

function playerSlapped(hare, tortoise) {
  game.whoSlapped(hare, tortoise);
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
    updateScore();
  } else if (game.won === false) {
    updateSubheader();
    playerPileVisibility();
  }
}

function updateScore() {
  if (game.winner === game.player1) {
    p1Score.innerText = `${game.player1.wins} Wins`;
  } else if (game.winner === game.player2) {
    p2Score.innerText = `${game.player2.wins} Wins`;
  }
}

function updateSubheader() {
  removeClass(subheader, "hidden");
  if (game.centerPile.length === 0) {
    subheader.innerText = `${game.gameMessage} ${game.slapper.id} takes the pile!`;
  } else if (game.centerPile.length >= 1 && game.won === false & game.gameMessage !== "Draw!") {
    subheader.innerText = `${game.gameMessage} ${game.slapper.id} loses a card!`;
  } else if (game.won === true) {
    subheader.innerText = `${game.gameMessage} ${game.winner.id} wins the game! To start a new game, press ENTER.`;
  } else if (game.won === false && game.centerPile[0].value === 11 && game.slapper !== game.currentPlayer) {
    subheader.innerText = `${game.gameMessage}`;
  } else if (game.player1.hand.length === 0 && game.player2.hand.length === 0 && game.gameMessage !== "Draw!") {
    subheader.innerText = `${game.gameMessage}`;
  } else if (game.gameMessage === "Draw!") {
    subheader.innerText = `${game.gameMessage} To start a new game, press ENTER.`;
  }
}

function draw() {
  game.gameMessage = "Draw!";
  addClass(p1Stack, "hidden");
  addClass(p2Stack, "hidden");
  updateSubheader();
}




//Footnote question - I tried to refactor the wet displayWinsPlayer1 and displayWinsPlayer2 functions, but it didn't like me passing game.player1.wins as an argument. I tried a myriad of approaches, but nothing worked. Could you help me understand as to why it doesn't like dot notation as an argument?

// displayWins("Player 1 wins", game.player1.wins);
// displayWins("Player 2 wins", game.player2.wins);
//
// function displayWins(item, gameLocation) {
//   var retrievedData = JSON.parse(localStorage.getItem(item));
//   if (retrievedData) {
//     var parsedArray = JSON.parse(retrievedData);
//     gameLocation = parsedArray;
//     displayScoreLocalStorage();
//   }
// }
