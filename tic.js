
let hide = $('#hide')
let show = $('#show')
let test=$('#test')
let reset=$("#reset")
let cell = $('.cell')
let cells=$('#cells')
let player1= "X"
let player2= "O"
let currentPlayer=player1
let swap = $("#switch")
let start = $('#startGame')

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
  if(c1.text()=="X" && c1.text()===c2.text() && c2.text()===c3.text()){
    alert("P1 Wins")
  }
  if(c4.text()=="X" && c4.text()===c5.text() && c5.text()===c6.text()){
    alert("P1 Wins")
  }
  if(c7.text()=="X" && c7.text()===c8.text() && c8.text()===c9.text()){
    alert("P1 Wins")
  }
  if(c1.text()=="X" && c1.text()===c4.text() && c4.text()===c7.text()){
    alert("P1 Wins")
  }
  
  if(c2.text()=="X" && c2.text()===c5.text() && c5.text()===c8.text()){
    alert("P1 Wins")
  }
  if(c3.text()=="X" && c3.text()===c6.text() && c6.text()===c9.text()){
    alert("P1 Wins")
  }
}




$('#playerTurn').hide
start.on('click',()=>{
    console.log(`It is ${currentPlayer} 's turn `)
    $('#playerTurn').show 
        $('#playerTurn').text("X's turn");
        Game()
})





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



//Below I was just playing around with how to show or hide different elements. 
hide.on('click',()=>{
    console.log('Wut')
    $('#test').hide();
})

show.on('click',()=>{
    console.log("yerp")
$("#test").show()
})


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
