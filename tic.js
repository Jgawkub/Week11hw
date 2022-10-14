
let test=$('#test')
let reset=$(".reset")
let cells=$('#cells')
let player1= "X"
let player2= "O"
let currentPlayer=player1
let swap = $("#switch")
let start = $('#startGame')
let turns
let oWin=$('#oWin')
let xWin=$('#xWin')
let b1=$('.b1')
xWin.hide()
oWin.hide()

//Hittting the reset button erases all of the values. 
reset.on('click',()=>{
  start.prop('disabled',false)
  console.log('Resetting the Game')
  console.log(turns)
  xWin.hide()
  oWin.hide()
  turns=0
$('#playerTurn').text("")
$('.b1').text("")
})

//start sets the player to player 1 or X logs who's turn it is and also disables the start button to avoid any conflicting commands.
start.on('click',()=>{
  Game();
  currentPlayer=player1
  console.log(` Starting game it is ${currentPlayer} 's turn `)
  $('#playerTurn').show 
  $('#playerTurn').text("X's turn");
    start.prop('disabled',true)
  } )     

 

// These boat load of if and else if statements is how I check for the win conditions of the game by seeing if 3 cells have either an X or an O. The checkig for a tie function still eludes me a little as it sometimes declares a tie before the game has even begun
function check() {
  let c1=$('#cell1')
  let c2=$('#cell2')
  let c3=$('#cell3')
  let c4=$('#cell4')
  let c5=$('#cell5')
  let c6=$('#cell6')
  let c7=$('#cell7')
  let c8=$('#cell8')
  let c9=$('#cell9')
  for (let i=0;i<=0; i++){
  if(c1.text()=="X" && c1.text()===c2.text() && c2.text()===c3.text()){
    xWin.show();
    
  }else if(c4.text()=="X" && c4.text()===c5.text() && c5.text()===c6.text())
  {
    xWin.show( )
   
  }else if (c7.text()=="X" && c7.text()===c8.text() && c8.text()===c9.text())
  {
    xWin.show()
    
  }else if(c1.text()=="X" && c1.text()===c4.text() && c4.text()===c7.text())
  {
    xWin.show()
    
  }
  else if(c2.text()=="X" && c2.text()===c5.text() && c5.text()===c8.text()){
    xWin.show()
    
  }
  else if(c3.text()=="X" && c3.text()===c6.text() && c6.text()===c9.text()){
    xWin.show()
    
  }
  else if(c1.text()=="X" && c1.text()===c5.text() && c5.text()===c9.text()){
    xWin.show()
    
  }
  else if(c3.text()=="X" && c3.text()===c5.text() && c5.text()===c7.text()){
    xWin.show()
    
  }
  else if(c1.text()=="O" && c1.text()===c2.text() && c2.text()===c3.text()){
    oWin.show()
    
  }
  else if(c4.text()=="O" && c4.text()===c5.text() && c5.text()===c6.text()){
    oWin.show()
    
  }
  else if(c7.text()=="O" && c7.text()===c8.text() && c8.text()===c9.text()){
    oWin.show()
   
  }
  else if(c1.text()=="O" && c1.text()===c4.text() && c4.text()===c7.text()){
    oWin.show()
   
  }
 else if(c2.text()=="O" && c2.text()===c5.text() && c5.text()===c8.text()){
   oWin.show()

  }
  else if(c3.text()=="O" && c3.text()===c6.text() && c6.text()===c9.text()){
    oWin.show()
  
  }
  else if(c1.text()=="O" && c1.text()===c5.text() && c5.text()===c9.text()){
    oWin.show()
   
  }
 else if(c3.text()=="O" && c3.text()===c5.text() && c5.text()===c7.text()){
    oWin.show()
    
  }//else{checkTie()}
  }
}


//Tried to figure out a way to check fo ties by counting how many rounds but I ran into some issue where the game would skip rounds and declare a tie before the condition was met. 
function checkTie(){
  if(turns==9){
  alert("Nobody Wins! Reset the game.")}
}


//Game checks who's turn it is and allows a player to place an approrpirate mark on any of the cells. I also call check each time a player has placed a mark to see if someone has won the game. 
function Game() {
  turns=0
  for (let i=0; i<=9; i++){
  $(`.cell-${i}`).on("click", () => {
    if (currentPlayer == player1 && $(`.cell-${i}`).text() !=="O" ) {
      $(`.cell-${i}`).text("X");
      check();
      currentPlayer = player2;
      $("#playerTurn").text("O's turn");
    } else if (currentPlayer == player2 && $(`.cell-${i}`).text() !=="X" ) {
      $(`.cell-${i}`).text("O");
      check();
      currentPlayer = player1;
      $("#playerTurn").text("X's turn");
    }
    console.log(`It is ${currentPlayer}'s turn`);
    turns+=1 
    console.log(turns)
  });
  }
}


