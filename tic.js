let hide = $('#hide')
let show = $('#show')
let test=$('#test')
let turns=0

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


let cell = $('.cell')


$('div.cell').on('click',()=>{
    cell.text("you've clicked a tile!")
})