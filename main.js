// A main.js file that instantiates the Game class and also contains all DOM related JavaScript
// var currentGame = new Game();

// eventTarget.addEventListener("keydown", event => {
//   if (event.isComposing || event.keyCode === 229) {
//     return;
//   }
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
var game = new Game();


function gameSetUp() {
  game.editCardName(cards);
  game.shuffleDeck();
  game.dealCards();
}

function removeHidden() {

}
