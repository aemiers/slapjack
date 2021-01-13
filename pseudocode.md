* Make game fully playable without the DOM (manually invoking instances of Game, Players, and running methods, etc, from your console) to force yourself to think data-model-first

shuffle deck now works!

deal cards -
  select shuffled deck
  split deck in half
  i 0-24 of array push to player1 hand array
  i 25-51 of array push to player2 hand array
  slice

  var player1Cards =
  player1.hand.push(cards.splice(0, 24));
  player2.hand.push(cards.splice(0, 24));




* Create 3 decks on the DOM

* Connect Game data model to the DOM

* Display the Player win data on the DOM

* Automatically reset the game to allow for a new game to be played after the previous game is won

* Persist Player win data using local storage (number of wins should persist across page refreshes)
