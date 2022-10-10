let hide = $('#hide')
let show = $('#show')
let test=$('#test')
console.log(test.text)







hide.on('click',()=>{
    console.log('Wut')
    $('#test').hide();
})

show.on('click',()=>{
    console.log("yerp")
$("#test").show()
})
