/**
 * Created by jteng on 1/15/16.
 */
var timelineHandler = function() {
    $('.timeline div').each(function(){
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $(this).offset().top,
            distance      = (elementOffset - scrollTop),
            windowHeight  = $(window).height(),
            breakPoint    = windowHeight*0.6;

        if(distance > breakPoint) {
            $(this).addClass("hide");
            $(this).removeClass("show");
        } else {
            $(this).addClass("show");
            $(this).removeClass("hide");
        }
    });
};

var timelineInit = function() {
    //$('.timeline').addClass("loaded");

    //$(window).scroll();
};

$(document).ready(timelineInit);
$(window).scroll(timelineHandler);
