# SlapJack

SlapJack is a two-player game played using keyboard commands. Each player has the option to deal a card or slap a pile. Potential moments where a player can slap, or steal, a pile are when a Jack appears, a Double (two of the same value card in a row), or a Sandwich (two of the same card value separated by a different card). Once one of the two players runs out of cards, a Sudden Death scenario begins, where the first person to slap the Jack is either declared the winner or back in the game.

## Launch

Clone the repo to your local machine and launch the index.html file in your browser.

## Technologies Used
1. Javascript
2. HTML
3. CSS

## Functionality
Upon page load, a game has already been set up and is ready for the players to start dealing their cards. The game play goes from starting with player1 to player2, each only being allowed to deal one card from their pile at a time. When each player presses their respective deal keys ("Q" for player1, "P" for player2), one card is deducted from their personal hand array and entered into the center pile array. The center pile alternates colors according to which player's turn it is.

<img src="https://gyazo.com/a7d5ecf484fba3e83adc13a97a44944c">

There are three ways in which a player can obtain cards from the center pile - slapping a jack, slapping a double, or slapping a sandwich. When the player slaps a valid play, the sub-header will update with with information about which player won the hand and how they did so.

<img src="https://gyazo.com/a7d5ecf484fba3e83adc13a97a44944c">

If a player slaps and the slap was not valid, the 'slapper' is penalized by taking the top card from their hand and giving it to the other player. The sub-header notifies players when a slap is not valid.

<img src="https://gyazo.com/99d51ec20b25bad7900c53849f3a2015">

When a player runs out of cards, a Sudden Death state is triggered. The player with remaining cards left keeps dealing. If the player without cards in their hand slaps the center pile when a Jack appears, that player is back in the game. The sudden death state no longer active and the players turns rotate as normal.
If the player with cards left in their hand slaps a Jack, the game is won and a new game can be started by pressing the enter button.

<img src="https://gyazo.com/469622d5a016e37863d4368c518d1346">

When the enter button is pressed, local storage is utilized to carry winner data across to the new game. Even when the refresh button is pressed on the browser, the player's win data will remain.

<img src="https://gyazo.com/6a8c5d488284a9e051443671c44ac466">

## Contributors
* Anneke Miers (https://github.com/aemiers)
