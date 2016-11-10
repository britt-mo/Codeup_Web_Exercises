/*
 * Created by brittmo on 11/7/16
 */
'use strict';


$("#introImage").fadeOut(5000,  function () {
    $("#mainDiv").removeClass("hidden").fadeIn(3000);
});


$(document).mousemove(function(e){
    $("#cat").stop().animate({left:e.pageX, top:e.pageY});
});

/*
var cat = $("#cat").get(0); //#cat must be in position: relative

$("body").click(getClickPosition);

function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (cat.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (cat.clientHeight / 2);

    cat.style.left = xPosition + "px";
    cat.style.top = yPosition + "px";

}

// Helper function to get an element's exact position
function getPosition(el) {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
}

*/