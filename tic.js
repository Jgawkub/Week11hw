
let test=$('#test')
let reset=$("#reset")
let cells=$('#cells')
let player1= "X"
let player2= "O"
let currentPlayer=player1
let swap = $("#switch")
let start = $('#startGame')




start.on('click',()=>{
  console.log(`It is ${currentPlayer} 's turn `)
  $('#playerTurn').show 
      $('#playerTurn').text("X's turn");
      Game()
})


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
    alert("X WINS")
  }else if(c4.text()=="X" && c4.text()===c5.text() && c5.text()===c6.text()){
    alert("X WINS")
  }else if (c7.text()=="X" && c7.text()===c8.text() && c8.text()===c9.text()){
    alert("X WINS")
  }else if(c1.text()=="X" && c1.text()===c4.text() && c4.text()===c7.text()){
    alert("X WINS")
  }
  else if(c2.text()=="X" && c2.text()===c5.text() && c5.text()===c8.text()){
    alert("X WINS")
  }
  else if(c3.text()=="X" && c3.text()===c6.text() && c6.text()===c9.text()){
    alert("X WINS")
  }
  else if(c1.text()=="X" && c1.text()===c5.text() && c5.text()===c9.text()){
    alert("X WINS")
  }
  else if(c3.text()=="X" && c3.text()===c5.text() && c5.text()===c9.text()){
    alert("X WINS")
  }
  else if(c1.text()=="O" && c1.text()===c2.text() && c2.text()===c3.text()){
    alert("O WINS")
  }
  else if(c4.text()=="O" && c4.text()===c5.text() && c5.text()===c6.text()){
    alert("O WINS")
  }
  else if(c7.text()=="O" && c7.text()===c8.text() && c8.text()===c9.text()){
    alert("O WINS")
  }
  else if(c1.text()=="O" && c1.text()===c4.text() && c4.text()===c7.text()){
    alert("O WINS")
  }
 else if(c2.text()=="O" && c2.text()===c5.text() && c5.text()===c8.text()){
    alert("O WINS")
  }
  else if(c3.text()=="O" && c3.text()===c6.text() && c6.text()===c9.text()){
    alert("O WINS")
  }
  else if(c1.text()=="O" && c1.text()===c5.text() && c5.text()===c9.text()){
    alert("O WINS")
  }
 else if(c3.text()=="O" && c3.text()===c5.text() && c5.text()===c9.text()){
    alert("O WINS")
  }else if($(`.cell-${i}`).text() !==""){
    alert('No One Wins ')//I'm asking it to tell me or trying to ask it to tell me that if there are no blank spaces left to delcare a tie. 
  }
  }
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
  });
 
}

}
    
//Hittting the reset button erases all of the values and switches the player back to player 1. 
reset.on('click',()=>{
  console.log('Resetting the Game')
  currentPlayer=player1
  for(let i=0; i<=9; i++){ 
  $(`.cell-${i}`).text("")
$('#playerTurn').text("")} 
})




// function Game (){
// for (let i=0; i<=9; i++){
//    $(`.cell-${i}`).on('click',()=>{
//     $(`.cell-${i}`).text("X")
//    })
// }
// }
// // function Game(){
   
//     if(currentPlayer==player1){
//         cell.on('click',()=>{
//             cell.text('X')
//             $('#playerTurn').text("O's turn")
//             });currentPlayer=player2}
       
//     else if(currentPlayer==player2){
//         cell.on('click',()=>{
//             cell.text('O')
//             $('#playerTurn').text("X's turn")
//     })
//     currentPlayer=player1
// }
// }



// Below is how I am deciding who's turn it is. In this case it always starts with X and if the current player is X it places X in the CELL, switches the player to o and displays that on the screen. It then switches back to X to let them make their turn 




// cell.on('click',()=>{
//     if(currentPlayer==player2){
//         cell.text('O')
//     }
// })






//this was an old way I was trying to get a swap turn functionality. 
// swap.on('click',()=>{
//     if(currentPlayer===player1){
//         currentPlayer=player2
//         console.log(`${currentPlayer}`)
//         $('#playerTurn').text("O's turn")

//     }else if(currentPlayer===player2){
//         currentPlayer=player1
//         console.log(`${currentPlayer}`)
//         $('#playerTurn').text("X's turn")
//     }
// })



// for(let i=1; i<10;i++){
//     console.log(`it is turn" ${i}`)
// }
