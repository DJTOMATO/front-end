// Al pasar el mouse por el primer <div>
// “text1” se mostrará el segundo "text2" y 
// al salir de él se ocultará nuevamente.
// function mostrar() {
//     //nombrar o modificar un elemento por id
//     document.getElementById("text2").style.display = "block";
// }

// para ejecutar jquery luego que el documento cargo
$(document).ready(function(){
    //cuando el documento este listo, se ejecutan otras funciones o eventos
    // $("#text1").mouseover(function(){
    //     $("#text2").toggle()
    // })
    $("#text1").hover(function(){
        $("#text2").toggle()
    })

    $("#img").dblclick(function(){
        $("#img").css({width:'100%'})
    })

    $("#img").mouseout(function(){
        $("#img").css({width:'20%'})
    })
    $("#caja3").mouseover(function(){
        $("#caja3").css("font-size",'32px')
    })
    $("#caja3").mouseout(function(){
        $("#caja3").css("font-size",'16px')
    })
});




