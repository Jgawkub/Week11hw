let hide = $('#hide')
let show = $('#show')
let test=$('#test')
let turns=0
let reset=$("#reset")
let cell = $('.cell')
let cells=$('#cells')
let player1= "X"
let player2= "O"
let currentPlayer=player1
let swap = $("#switch")
let start = $('#startGame')
let c1=$('#cell1')
let c2=$('#cell2')
let c3=$('#cell3')
let c4=$('#cell4')
let c5=$('#cell5')
let c6=$('#cell6')
let c7=$('#cell7')
let c8=$('#cell8')
let c9=$('#cell9')
console.log(c1)

$('#playerTurn').hide
start.on('click',()=>{
    console.log(`It is ${currentPlayer} 's turn `)
    $('#playerTurn').show 
        $('#playerTurn').text("X's turn");
        Game()
        
})

checkWinner() 
function checkWinner(){
    if(c1.text =='X' && c1===c2===c3){
     console.log("player 1 won")
    }
}

function Game() {
  for (let i=0; i<=9; i++){
  $(`.cell-${i}`).on("click", () => {
    if (currentPlayer == player1) {
      $(`.cell-${i}`).text("X");
      currentPlayer = player2;
      $("#playerTurn").text("O's turn");
    } else if (currentPlayer == player2) {
      $(`.cell-${i}`).text("O");
      currentPlayer = player1;
      $("#playerTurn").text("X's turn");
    }
    console.log(`It is ${currentPlayer}'s turn`);
  });
}
}
    

reset.on('click',()=>{
  console.log('Resetting the Game')
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



let a=1
let b=1
let c=1

// for(let i=1; i<10;i++){
//     console.log(`it is turn" ${i}`)
// }