/**
 * Created by brittmo on 10/6/16.
 */
"use strict";

var condition = true;
var grade = 70;

if (grade >= 80 ) {
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
    console.log("Ryan spent at least $200; he will pay " + finalPriceR)
} else {
    console.log("Ryan will not get a discount; he will pay " + ryan)
}

if (cameron >= 200){
    console.log("Cameron spent at least $200; he will pay " + finalPriceC)
}else {
    console.log("cameron did not get a discount; he will pay " + cameron)
}

if (george >= 200) {
    console.log("George spent at least $200; he will pay " + finalPriceG)
}else {
    console.log("George did not get a discount; he will pay " + george)
}





var flipACoin = Math.floor(Math.random()* 2);

var flipACoin = 0 ? "Buy a car." : "Buy a house.";




