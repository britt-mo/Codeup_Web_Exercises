/**
 * Created by brittmo on 11/7/16.
 */
'use strict';

console.log($("#mainDiv").hide())

$("#introImage").fadeOut(5000,  function () {
    $("#mainDiv").removeClass("hidden").fadeIn(3000);
});