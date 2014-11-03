/*jQuery*/

$(function(){
	var ink, d, x, y;
	$(".ripplelink").click(function(e){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }
             
        ink = $(this).find(".ink");
        ink.removeClass("animate");
         
        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }
         
        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;
         
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    });

    $(".btn").click(function(event){
        console.log("A")
        if($(this).find(".drop").length == 0) { $(this).prepend("<span class='drop'></span>"); }
        drop = $(this).find(".drop").removeClass("animate");
        x = event.pageX - drop.width()/2 - $(this).offset().left;
        y = event.pageY - drop.height()/2 - $(this).offset().top;
        drop.css({top: y+'px', left: x+'px'}).addClass("animate");
    })
});
/*
$(document).ready(function() {
    var classes = '';
    $('input[type=radio][name=button]').each(function() {
        classes += this.value+' ';
    });
    $('input[type=radio][name=button]').change(function() {
        $('header > .btn').removeClass(classes).addClass('btn '+this.value);
    });
    $('input[type=radio][name=size]').change(function() {
        $('body').removeClass().addClass(this.value);
    });
    $('input[type=radio][name=color]').change(function() {
        $('header').removeClass().addClass(this.value);
    });
    $('#next').click(function(event) {
        event.preventDefault();
        $('input:checked[type=radio][name=button]').parent().next().find('input').click();
    })
    $('#prev').click(function(event) {
        event.preventDefault();
        $('input:checked[type=radio][name=button]').parent().prev().find('input').click();
    })
    $('header > .btn').click(function(event) {
        event.preventDefault();
        var randomEl = Math.floor((Math.random() * $('input[type=radio][name=button]').length));
        $('input:eq(' + randomEl + ')[type=radio][name=button]').click();
    })
    $(".btn").click(function(event){
        if($(this).find("b.drop").length == 0) { $(this).prepend("<b class='drop'></b>"); }
        drop = $(this).find("b.drop").removeClass("animate");
        x = event.pageX - drop.width()/2 - $(this).offset().left;
        y = event.pageY - drop.height()/2 - $(this).offset().top;
        drop.css({top: y+'px', left: x+'px'}).addClass("animate");
    })

});
*/