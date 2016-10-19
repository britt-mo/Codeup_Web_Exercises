/**
 * Created by brittmo on 10/6/16.
 */
"use strict";


var firstGrade = 70;
var secondGrade = 80;
var thirdGrade = 90;

var average = (firstGrade + secondGrade + thirdGrade) / 3;


if (average > 80 ) {
    console.log("You're awesome!")
} else {
    console.log("You need to practice more")
}



var ryan = 250;
var finalPriceR = ryan - ((ryan/100)*20);
var cameron = 180;
var finalPriceC = cameron - ((cameron/100)*20);
var george = 320;
var finalPriceG = george - ((george/100)*20);


if (ryan >= 200){
    console.log("Ryan spent " + ryan + " he will pay " + finalPriceR)
} else {
    console.log("Ryan will not get a discount; he will pay " + ryan)
}

if (cameron >= 200){
    console.log("Cameron spent " + cameron + " he will pay " + finalPriceC)
}else {
    console.log("cameron did not get a discount" + " he will pay " + cameron)
}

if (george >= 200) {
    console.log("George spent " + george + " he will pay " + finalPriceG)
}else {
    console.log("George did not get a discount; he will pay " + george)
}




/*input */

var flipACoin = Math.floor(Math.random()* 2);

var message = "buy a house";

if (flipACoin = 1)/*  - 1 converted to boolean is true. you could write it as (1 == flipACoin)*/ {
    message = "Buy a car";

}
/* output*/
console.log(message);
