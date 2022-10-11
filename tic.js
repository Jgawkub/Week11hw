let hide = $('#hide')
let show = $('#show')
let test=$('#test')
let turns=0
let reset=$("#reset")
let cell = $('.cells')
let player1= "X"
let player2= "O"
let currentPlayer=player1
let swap = $("#switch")



swap.on('click',()=>{
    if(currentPlayer===player1){
        currentPlayer=player2
        $('#playerTurn').text("0's turn")

    }else if(currentPlayer===player2){
        currentPlayer=player1
        $('#playerTurn').text("X's turn")
    }
})





for(let i=1; i<10;i++){
    console.log(`it is turn" ${i}`)
}



hide.on('click',()=>{
    console.log('Wut')
    $('#test').hide();
})

show.on('click',()=>{
    console.log("yerp")
$("#test").show()
})




reset.on('click',()=>{
    console.log("is this working")
   cell.text("")
})

// for (let i=0; i<cell.length; i++){
//     console.log(cell[i])
// }

cell.on('click',()=>{
    cell.text("you've clicked a tile!")
})

