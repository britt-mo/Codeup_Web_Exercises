/**
 * Created by brittmo on 10/6/16.
 */
    //control structures
    //if

var luckyNumber = Math.floor(Math.random()* 6);

var receipt = 60;

//output//
var amountWithDiscount;

//variable for switch statement//
switch (luckyNumber) {
    case 0:
        amountWithDiscount = receipt;
        break;
    case 1:
        amountWithDiscount = receipt * .9;
        break;
    case 2:
        amountWithDiscount = receipt * .75;
        break;
    case 3:
        amountWithDiscount = receipt * .6;
        break;
    case 4:
        amountWithDiscount = receipt * .5;
        break;
    case 5:
        amountWithDiscount = 0;
        break;
}


console.log("You got number " + luckyNumber + "; the amount spent was " + receipt + ", so you will pay " + amountWithDiscount)



var monthNumber = Math.floor(Math.random()* 12) + 1;
var monthName;

switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
}

console.log("Month number is " + monthNumber + "; month name is " + monthName);





























