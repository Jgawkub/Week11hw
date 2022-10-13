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


$('#playerTurn').hide
start.on('click',()=>{
    console.log(`${currentPlayer}`)
    $('#playerTurn').show 
        $('#playerTurn').text("X's turn");
        Game()
})
    


// for(let i=1; i<10;i++){
//     console.log(`it is turn" ${i}`)
// }






reset.on('click',()=>{
    console.log("is this working")
   cell.text("")
})


// Below is how I am deciding who's turn it is. In this case it always starts with X and if the current player is X it places X in the CELL, switches the player to o and displays that on the screen. It then switches back to X to let them make their turn 
function Game(){
cell.on('click',()=>{
    if(currentPlayer==player1){
        cell.text("X")
    currentPlayer=player2
    console.log(`${currentPlayer}`)
        $('#playerTurn').text("O's turn")
}
        else if(currentPlayer==player2){
            cell.text('O')
    currentPlayer=player1
    console.log(`${currentPlayer}`)
    $('#playerTurn').text("X's turn")
        }   
})
}


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
for (let i=0; i<cell.length; i++){
    console.log(cell[i])
}


