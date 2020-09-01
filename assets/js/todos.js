//Check Off To Dos
$("li").click(function(){
    $(this).toggleClass("completed");
})

// Delete To-Dos with X
$("span").click(event){
    $(this).parent.fadeout(500,function (param) { 
        this.remove() 
    });
    event.stopPropagation();
})