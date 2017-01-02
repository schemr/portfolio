/* *************************************** */ 
/* Scroll */
/* *************************************** */  
        
$(document).ready(function() {
    $(window).scroll(function(){
        toolbar();
        footerbottom();
    });
});

function toolbar(){
    if ($(this).scrollTop() > 20){
        $('#toolbar').css("height","50px");
        $('#logo').css({"width" : "32px", "height": "32px", "marginTop" : "58px"});
        $('#header h1').css({"fontSize": "1.5em", "paddingTop": "62px"})
    } else{
        $('#toolbar').css("height","100px");
        $('#logo').css({"width" : "64px", "height": "64px", "marginTop" : "18px"});
        $('#header h1').css({"fontSize": "2em", "paddingTop": "38px"})
    }
}

function footerbottom(){
    if($(this).scrollTop() == 0){
        $('#footer').stop().fadeIn();
    }else{
        $('#footer').stop().fadeOut();
    }
}