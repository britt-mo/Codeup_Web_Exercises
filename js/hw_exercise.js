/**
 * Created by brittmo on 10/14/16.
 */


'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */

var luckyNumber;
var i = 1;
var count0 = 0, count1 = 1, count2 = 2, count3 = 3, count4 = 4, count5 = 5;
var counters = [0, 0, 0, 0, 0, 0];
//replace a switch with an array
while (i <= 100) {
    luckyNumber = Math.floor(Math.random() * 6);
    counters[luckyNumber]++;
    i++;
}

    console.log("0 appeared " + counters[0] + " times");
    console.log("1 appeared " + counters[1] + " times");
    console.log("2 appeared " + counters[2] + " times");
    console.log("3 appeared " + counters[3] + " times");
    console.log("4 appeared " + counters[4] + " times");
    console.log("5 appeared " + counters[5] + " times");


// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100


/*
 var luckyNumber;
 var i = 1;
 var counters = [0, 0, 0, 0, 0, 0];
 while (i <= 100) {
 luckyNumber = Math.floor(Math.random() * 6);
 switch (luckyNumber) {
 case 0:
 counters[0]++;
 break;
 case 1:
 counters[1]++;
 break;
 case 2:
 counters[2]++;
 break;
 case 3:
 counters[3]++;
 break;
 case 4:
 counters[4]++;
 break;
 case 5:
 counters[5]++;
 break;
 }
 i++;
 }

 console.log("0 appeared " + count0 + " times");
 console.log("1 appeared " + count1 + " times");
 console.log("2 appeared " + count2 + " times");
 console.log("3 appeared " + count3 + " times");
 console.log("4 appeared " + count4 + " times");
 console.log("5 appeared " + count5 + " times");

 */

/*
 var luckyNumber;
 var i = 1;
 var counters = [0, 0, 0, 0, 0, 0];
 //replace a switch with an array
 while (i <= 100) {
 luckyNumber = Math.floor(Math.random() * 6);
 counters[luckyNumber]++;
 i++;
 }
 counters.forEach(function(counter, i){
counters.log(i + " appeared " + counter + " times");
});
 */