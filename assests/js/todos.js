$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();// here this is parent of span i.e li //
     });
  event.stopPropagation();

});



$("input[type='text']").keypress(function(event){
	if(event.which===13){
    var todotext = ($(this).val());
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todotext + "</li>");
}
});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});



