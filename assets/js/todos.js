//Check Off To Dos
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
})

// Delete To-Dos with X
$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500, function () { 
        $(this).remove();
    });
    e.stopPropagation();
})

$("input[type='text']").keypress(function (e) { 
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText +"</li>");
        
    }
});