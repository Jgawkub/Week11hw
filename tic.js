
let reset = $(".reset");
let cells = $("#cells");
let player1 = "X";
let player2 = "O";
let currentPlayer;
let swap = $("#switch");
let start = $("#startGame");
let turns;
let oWin = $("#oWin");
let xWin = $("#xWin");
let b1 = $(".b1");
xWin.hide();
oWin.hide();

//Hittting the reset button erases all of the values.
reset.on("click", () => {
  turns=0
  start.prop("disabled", false);
  console.log("Resetting the Game");
  xWin.hide();
  oWin.hide();
  $("#playerTurn").text("");
  $(".b1").text("");
});

//start starts the Game (described below) as well as setting the player to player 1 and logs who's turn it is and also disables the start button to avoid any conflicting commands.
start.on("click", () => {
  turns = 0;
  Game();
  currentPlayer = player1;
  console.log(` Starting game it is ${currentPlayer} 's turn `);
  $("#playerTurn").show;
  $("#playerTurn").text("X's turn");
  start.prop("disabled", true);
});

// These boat load of if and else if statements is how I check for the win conditions of the game by seeing if 3 cells have either an X or an O. If the condition is met it pops up an alert that the particular player has won.
function check() {
  let c1 = $("#cell1");
  let c2 = $("#cell2");
  let c3 = $("#cell3");
  let c4 = $("#cell4");
  let c5 = $("#cell5");
  let c6 = $("#cell6");
  let c7 = $("#cell7");
  let c8 = $("#cell8");
  let c9 = $("#cell9");

  if (c1.text() == "X" && c1.text() === c2.text() && c2.text() === c3.text()) {
    xWin.show();
  } else if (
    c4.text() == "X" &&
    c4.text() === c5.text() &&
    c5.text() === c6.text()
  ) {
    xWin.show();
  } else if (
    c7.text() == "X" &&
    c7.text() === c8.text() &&
    c8.text() === c9.text()
  ) {
    xWin.show();
  } else if (
    c1.text() == "X" &&
    c1.text() === c4.text() &&
    c4.text() === c7.text()
  ) {
    xWin.show();
  } else if (
    c2.text() == "X" &&
    c2.text() === c5.text() &&
    c5.text() === c8.text()
  ) {
    xWin.show();
  } else if (
    c3.text() == "X" &&
    c3.text() === c6.text() &&
    c6.text() === c9.text()
  ) {
    xWin.show();
  } else if (
    c1.text() == "X" &&
    c1.text() === c5.text() &&
    c5.text() === c9.text()
  ) {
    xWin.show();
  } else if (
    c3.text() == "X" &&
    c3.text() === c5.text() &&
    c5.text() === c7.text()
  ) {
    xWin.show();
  } else if (
    c1.text() == "O" &&
    c1.text() === c2.text() &&
    c2.text() === c3.text()
  ) {
    oWin.show();
  } else if (
    c4.text() == "O" &&
    c4.text() === c5.text() &&
    c5.text() === c6.text()
  ) {
    oWin.show();
  } else if (
    c7.text() == "O" &&
    c7.text() === c8.text() &&
    c8.text() === c9.text()
  ) {
    oWin.show();
  } else if (
    c1.text() == "O" &&
    c1.text() === c4.text() &&
    c4.text() === c7.text()
  ) {
    oWin.show();
  } else if (
    c2.text() == "O" &&
    c2.text() === c5.text() &&
    c5.text() === c8.text()
  ) {
    oWin.show();
  } else if (
    c3.text() == "O" &&
    c3.text() === c6.text() &&
    c6.text() === c9.text()
  ) {
    oWin.show();
  } else if (
    c1.text() == "O" &&
    c1.text() === c5.text() &&
    c5.text() === c9.text()
  ) {
    oWin.show();
  } else if (
    c3.text() == "O" &&
    c3.text() === c5.text() &&
    c5.text() === c7.text()
  ) {
    oWin.show();
  }
  checkTie();
}

//Tried to figure out a way to check fo ties by counting how many rounds but I ran into some issue where the game would skip rounds and declare a tie before the condition was met.
function checkTie() {
  if (turns == 9) {
    alert("Nobody Wins! Reset the game.");
  }
}
function turn() {
  turns = 0;
  b1.on("click", () => {
    turns++;
    console.log(turns);
  });
}
turn();


//Game checks who's turn it is and allows a player to place an approrpirate mark on any of the cells. I also call check each time a player has placed a mark to see if someone has won the game.
function Game() {
  for (let i = 0; i <= 9; i++) {
    $(`.cell-${i}`).on("click", () => {
      if (currentPlayer == player1 && $(`.cell-${i}`).text() !== "O") {
        $(`.cell-${i}`).text("X");
        check();
        currentPlayer = player2;
        $("#playerTurn").text("O's turn");
      } else if (currentPlayer == player2 && $(`.cell-${i}`).text() !== "X") {
        $(`.cell-${i}`).text("O");
        check();
        currentPlayer = player1;
        $("#playerTurn").text("X's turn");
      }
      console.log(`It is ${currentPlayer}'s turn`);
    });
  }
}
//The clumsy-ish way I check for ties is by counting turns. I reason that if by turn 9 no one has won then I post a tie. If I were to iterate this I would want to figure out a way bby essentially reading the board and declaring a tie if each square is filled. I played around with that in some earlier iterations but couldn't seem to figure it out just quite. I would get the game declaring a tie after placing just one mark down. 
