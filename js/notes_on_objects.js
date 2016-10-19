/**
 * Created by brittmo on 10/14/16.
 */

(function() {
    "use strict";

    // create a circle object
    var circle = {
        color: 'red',
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
    var area = this.getArea();
            if(doRounding){ //can use doRounding bc it's a  boolean
                return Math.round(area);
            }else{
                return area;
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
};
    console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());


    // log info about the circle
    console.log(circle);
    console.log(circle.logInfo(false));
    console.log(Math.round(circle.area));
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();


