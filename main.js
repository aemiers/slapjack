// A main.js file that instantiates the Game class and also contains all DOM related JavaScript
//
var centerPile = document.querySelector(".middle-card-container");
var playedCard = document.querySelector(".current-card")


window.addEventListener("load", onLoad());
document.addEventListener("keydown", function(event) {
  if (event.key === "q" && game.currentPlayer === game.player1) {
    p1PlayCard();
    // p1 deal
  }
  else if (event.key === "p" && game.currentPlayer === game.player2) {
    p2PlayCard();
    // p2 deal a card
  }
  else if (event.key === "f") {
    game.whoSlapped("player1", "player2");
    game.slap();
    // p1 slap
    //make sure that
  }
  else if (event.key === "j") {
    game.whoSlapped("player2", "player1");
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
  game.gameSetUp();
}

function changeCenterPileColor(playedCard, element1, element2) {
  removeClass(playedCard, element1);
  addClass(playedCard, element2);
}

function showCurrentCard() {
  console.log(game.centerPile[0].imgsrc)
  playedCard.src = game.centerPile[0].imgsrc;
}

function p1PlayCard() {
  removeClass(centerPile, "hidden");
  changeCenterPileColor(playedCard, "p2-shadow", "p1-shadow");
  game.addToCenterPile();
  showCurrentCard();
  game.turnHandler();
}

function p2PlayCard() {
  changeCenterPileColor(playedCard, "p1-shadow", "p2-shadow");
  game.addToCenterPile();
  showCurrentCard();
  game.turnHandler();
}
