
let test=$('#test')
let reset=$("#reset")
let cells=$('#cells')
let player1= "X"
let player2= "O"
let currentPlayer=player1
let swap = $("#switch")
let start = $('#startGame')
let turns = 1



start.on('click',()=>{
  turns=1
  currentPlayer=player1
  console.log(`It is ${currentPlayer} 's turn `)
  $('#playerTurn').show 
  $('#playerTurn').text("X's turn");
    Game()
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
    alert("X WINS. Reset the game.")
  }else if(c4.text()=="X" && c4.text()===c5.text() && c5.text()===c6.text())
  {
    alert("X WINS. Reset the game.")
  }else if (c7.text()=="X" && c7.text()===c8.text() && c8.text()===c9.text())
  {
    alert("X WINS. Reset the game.")
  }else if(c1.text()=="X" && c1.text()===c4.text() && c4.text()===c7.text())
  {
    alert("X WINS. Reset the game.")
  }
  else if(c2.text()=="X" && c2.text()===c5.text() && c5.text()===c8.text()){
    alert("X WINS. Reset the game.")
  }
  else if(c3.text()=="X" && c3.text()===c6.text() && c6.text()===c9.text()){
    alert("X WINS. Reset the game.")
  }
  else if(c1.text()=="X" && c1.text()===c5.text() && c5.text()===c9.text()){
    alert("X WINS. Reset the game.")
  }
  else if(c3.text()=="X" && c3.text()===c5.text() && c5.text()===c9.text()){
    alert("X WINS. Reset the game.")
  }
  else if(c1.text()=="O" && c1.text()===c2.text() && c2.text()===c3.text()){
    alert("O WINS. Reset the game.")
  }
  else if(c4.text()=="O" && c4.text()===c5.text() && c5.text()===c6.text()){
    alert("O WINS. Reset the game.")
  }
  else if(c7.text()=="O" && c7.text()===c8.text() && c8.text()===c9.text()){
    alert("O WINS. Reset the game.")
  }
  else if(c1.text()=="O" && c1.text()===c4.text() && c4.text()===c7.text()){
    alert("O WINS. Reset the game.")
  }
 else if(c2.text()=="O" && c2.text()===c5.text() && c5.text()===c8.text()){
    alert("O WINS. Reset the game.")
  }
  else if(c3.text()=="O" && c3.text()===c6.text() && c6.text()===c9.text()){
    alert("O WINS. Reset the game.")
  }
  else if(c1.text()=="O" && c1.text()===c5.text() && c5.text()===c9.text()){
    alert("O WINS. Reset the game.")
  }
 else if(c3.text()=="O" && c3.text()===c5.text() && c5.text()===c9.text()){
    alert("O WINS. Reset the game.")
    
  // }else if($(`.cell-${i}`).text() !==""){
  //   alert('No One Wins ')//I'm asking it to tell me or trying to ask it to tell me that if there are no blank spaces left to delcare a tie. Couldnt exactly get this to work as it would declare a tie after someone placed a mark. 
  }else{checkTie()}
  }
}

//Another attempt below at trying to check for a tie. 

// function tieCheck(){
//   for(let i=0;i<=9;i++){
//   if ($('.b1').text()!==""){
//     console.log("nobody wins")
//   }
// }
// }
//Finally figured out a way to tie below. 
function checkTie(){
  if(turns==9){
  alert("Nobody Wins! Reset the game.")}
}


//Game checks who's turn it is and allows a player to place an approrpirate mark on any of the cells. I also call check each time a player has placed a mark to see if someone has won the game. 
function Game() {
  
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
    console.log(turns)
    turns+=1 
  });

  
}

}
    
//Hittting the reset button erases all of the values and switches the player back to player 1. 
reset.on('click',()=>{
  start.prop('disabled',false)
  console.log('Resetting the Game')
  
$('#playerTurn').text("")
  for(let i=0; i<=9; i++){ 
$(`.cell-${i}`).text("")
} 
})


