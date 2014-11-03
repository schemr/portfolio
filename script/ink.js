/* *************************************** */ 
/* Scroll to Top */
/* *************************************** */  
        
$(document).ready(function() {
    $(".totop").hide();
    
    $(window).scroll(function(){
        toolbar();
        totop();
    });

    // ripple
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
        $(this).toggleClass("maximized");
        event.preventdefault;
    });
        
});
/* *************************************** */

function toolbar(){
    if ($(this).scrollTop() > 10){
        $('#toolbar').css("height","50px");
        $('#logo').css({"width" : "32px", "height": "32px", "marginTop" : "58px"});
        $('#header h1').css({"fontSize": "1.5em", "paddingTop": "62px"})
    } else{
        $('#toolbar').css("height","100px");
        $('#logo').css({"width" : "64px", "height": "64px", "marginTop" : "18px"});
        $('#header h1').css({"fontSize": "2em", "paddingTop": "38px"})
    }
}

function totop(){
    if ($(this).scrollTop() > 300) {
        $('.totop').fadeIn();
    } else {
        $('.totop').fadeOut();
    }

    $(".totop a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
}