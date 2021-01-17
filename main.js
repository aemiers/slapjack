// A main.js file that instantiates the Game class and also contains all DOM related JavaScript
//
var centerPile = document.querySelector(".middle-card-container");
var playedCard = document.querySelector(".current-card")


window.addEventListener("load", onLoad());
document.addEventListener("keydown", function(event) {
  if (event.key === "q" && game.currentPlayer === player1) {
    game.addToCenterPile();
    // p1 deal
  }
  else if (event.key === "p" && game.currentPlayer === player2) {
    game.addToCenterPile();
    // p2 deal a card
  }
  else if (event.key === "f") {
    whoSlapped("player1", "player2");
    game.slap();
    // p1 slap
    //make sure that
  }
  else if (event.key === "j") {
    whoSlapped("player2", "player1");
    game.slap();
    // p2 slap
  }
});

var game;

function loadGame() {
  game = new Game(cards);
}

function resetGame() {
  game = new Game(cards, game.player1, game.player2)
}

function addClass(element, style) {
  element.classList.add(style);
}

function removeClass(element, style) {
  element.classList.remove(style);
}

function onLoad(){
  loadGame();
  changeCenterPileColor();
  game.gameSetUp();
}

function changeCenterPileColor() {
  if (game.currentPlayer === game.player1) {
    removeClass(playedCard, "p2-shadow");
    addClass(playedCard, "p1-shadow");
  } else if (game.currentPlayer === game.player2) {
    removeClass(playedCard, "p1-shadow");
    addClass(playedCard, "p2-shadow");
  }
}

function showCurrentCard() {
  playedCard.src = game.centerPile[0].imgsrc;

}
