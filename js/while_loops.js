/**
 * Created by brittmo on 10/7/16.
 */
//While
//Loops * *

'use strict';

//Counter
//Accumulator

var i = 1; //counter

while (/* condition, returns true */ i < 21) { //start of a block
    console.log(i);
    i += 2; //increment
} //end of a block


console.log("We're done");

var targetAmount = 100;
var amountSaved = 0; //accumulator
var j = 0;

while (amountSaved < targetAmount) {
    amountSaved += Math.floor(Math.random() * 10) + 1;
    j++;
}

console.log("I saved " + amountSaved + "; there were " + j + " repetitions");



//Do While//
//runs a loop at least once, regardless of if conditions are met//


var allCones = Math.floor(Math.random() * 50) + 50;
var cones = Math.floor(Math.random() * 5) + 1;



do {
    cones = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - cones;
    console.log(cones + " cones sold");
    if (cones > allCones) {
        console.log("I don't have enough cones to sell")
    }
} while (allCones > 0);

console.log("Yay! I sold them all!");


//other way//


var theCones;
var conesLeft = allCones;

do {
    theCones = Math.floor(Math.random() * 5) + 1;
    //2 available
    //a customer wants 4
    if (theCones <= conesLeft){
        conesLeft -= theCones;
    }else {
        console.log("Cannot sell you " + cones + " cones I only have " + conesLeft + " ... ");
    }
}while (conesLeft > 0);
console.log("Yay I sold them all!");















