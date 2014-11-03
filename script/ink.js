/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-transition to elements.
 

(function($) {
  var speed = 900;
  var container =  $('.display-animation');  
  container.each(function() {   
    var elements = $(this).children();
    elements.each(function() {      
      var elementOffset = $(this).offset(); 
      var offset = elementOffset.left*0.8 + elementOffset.top;
      var delay = parseFloat(offset/speed).toFixed(2);
      $(this)
        .css("-webkit-transition-delay", delay+'s')
        .css("-o-transition-delay", delay+'s')
        .css("transition-delay", delay+'s')
        .addClass('animated');
    });
  });

})(jQuery);
*/
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
    });

    $(".ripplebtn").click(function(event){
        if($(this).find(".drop").length == 0) { $(this).prepend("<b class='drop'></b>"); }
        drop = $(this).find(".drop").removeClass("animate");
        x = event.pageX - drop.width()/2 - $(this).offset().left;
        y = event.pageY - drop.height()/2 - $(this).offset().top;
        drop.css({top: y+'px', left: x+'px'}).addClass("animate");
        $(this).toggleClass("leftArrow"); // 로고 <- 전환 클래스 
        //$(this).find("img").toggle("fast");
    });
});

