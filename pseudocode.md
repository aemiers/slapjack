* Make game fully playable without the DOM (manually invoking instances of Game, Players, and running methods, etc, from your console) to force yourself to think data-model-first

shuffle deck now works!

deal cards -
  select shuffled deck
  split deck in half
  i 0-24 of array push to player1 hand array
  i 25-51 of array push to player2 hand array
  slice

  var player1Cards =

addToCenterPile
  take first index from player's hand array
  shift
  add to centerPile array at the end?? or beginning??
  add player's color to the center pile

Slap -
  jack, doubles, sandwiches- all cards in centerPile are shuffled and  added to that player's hand
  center pile is an empty array again
  deal goes to next player
  or if ()
  or if ()
  the last 5 of the png === last 5 of the other

  Make sure it goes to the person who slapped, not whose turn it is
    -create event listeners for keys

  slap when not a jack, that player forfits the top card in their hand (0 index) and it gets added to bottom of opponent's hand

  when a player is all out of cards, the other player deals until a jack is displayed. If the person out of cards slaps, that person gets the center pile of cards and game goes on.

  after a player slaps, whose turn is it? other person's

If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.


How do I know which player is slapping? the specific key that's pressed. If f is pressed, it was p1, if j is pressed, it was p2.

on page load - the cards have been shuffled, dealt, new game has been created, both scores are at 0, no card is in the middle.

player1 starts by adding to center pile. Card turns the color of player1, card has been added to the centerPile array. card has been removed from player's card hand array. switches to player2's turn.

How do I show the card color of the past player? When the player clicks the p or q button, that changes the color of the center card.

Right now, the played card is not going to the centerpile array, but going to the other player's hand?? It must be the slap function that's going awry

When a player slaps, need to hide center pile again.
Also add removeClass to p2 plays
After a player slaps, it's the other player's turn.

deactivate slap buttons?

Change everything over to find the card object
Check that it still works in the console.

Order on normal gameplay-
  key is pressed to deal card
  centerpile is now visible
  subheader is hidden
  pile color is changed
  card is removed from player array and added to center pile
  centerPile array [0] is now visible on screen
  turn to the next person

Order on suddenDeath -
  key is pressed to deal card
  if a player has an empty array, sudden death is triggered
  pile color will always be that of the currentPlayer
  card is removed from currentPlayer's array and added to center
  centerPile array [0] is now visible on screen



* Create 3 decks on the DOM

* Connect Game data model to the DOM

* Display the Player win data on the DOM
  player's win also increases by 1

* Automatically reset the game to allow for a new game to be played after the previous game is won

* Persist Player win data using local storage (number of wins should persist across page refreshes)
