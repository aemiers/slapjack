// A main.js file that instantiates the Game class and also contains all DOM related JavaScript
//
var player1 = new Player("player1");
var player2 = new Player("player2");
var game = new Game("player1", "player2", cards);

window.addEventListener("load", gameSetUp());
document.addEventListener("keydown", function(event) {
  if (event.key === "q" && game.currentPlayer === player1) {
    console.log("one");
    // p1 deal
  }
  else if (event.key === "p" && game.currentPlayer === player2) {
    console.log("two");
    // p2 deal a card
  }
  else if (event.key === "f") {
    console.log("three");
    // p1 slap
  }
  else if (event.key === "j") {
    console.log("four");
    // p2 slap
  }
});

console.log(cards);
console.log("test")
// var game = new Game(player1, player2);

function

function removeHidden() {

}
