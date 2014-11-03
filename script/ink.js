/*jQuery*/

$(function(){
	var ink, d, x, y;
	$(".ripplelink").click(function(event){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }
             
        ink = $(this).find(".ink");
        ink.removeClass("animate");
         
        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }
         
        x = event.pageX - $(this).offset().left - ink.width()/2;
        y = event.pageY - $(this).offset().top - ink.height()/2;
         
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
        $(this).toggleClass("maximized")
    });
});
var pageHeight = 0;
/*
window.onload = function(){
    pageHeight = window.innerHeight-140;
    homeLayout();

}

function homeLayout(){
        $(".ripplelink").css("height",pageHeight/2);
}*/
