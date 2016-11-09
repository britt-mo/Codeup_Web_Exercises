/**
 * Created by brittmo on 11/7/16.
 */
'use strict';

console.log($("#mainDiv").hide())

$("#introImage").animate({
    opacity: 0.10,
}, 3000, function() {
    $("#mainDiv").removeClass("hidden").fadeIn(3000);
});

$('#nav').affix({
    offset: {
        top: $('#nav').offset().top
    }
});

$('#nav').affix({
    offset: {
        bottom: ($('footer').outerHeight(true) +
        $('.application').outerHeight(true)) +
        40
    }
});