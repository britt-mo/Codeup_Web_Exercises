/**
 * Created by brittmo on 10/10/16.
 */
/* Notes:

 function doSomething() {
 var result;
 // calculate result
 return result;
 }

 doSomething(); // call the function doSomething()

 'use strict';

 var result = doSomething(); // Result now holds the value of what doSomething() returns

 console.log(doSomething()); // The value doSomething() returns is passed to console.log()


 'use strict';

 var doAnotherThing = doSomething; // No parenthesis!

 doAnotherThing(); // Calls the code defined in doSomething(


 function isEven(input) {
 var remainder = input % 2;
 if (remainder === 0) {
 return true;
 } else {
 return false;
 }
 }

 function sum(a, b) {
 return a + b;
 }
*/



"use strict";

var myNameIs = 'Bob'; // TODO:

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

var name = "Britt";

function sayHello(name) {
    console.log("Hello from " + name);
}
// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
console.log(sayHello (myNameIs));
console.log(sayHello ("Britt"));
console.log(sayHello ("Parameters are like variables"));



// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:


var number = Math.floor((Math.random()*100)+1);

function isOdd(number) {
    if (number % 2 !=0){
        return number + ' is odd';
        /* return (number % 2 !== 0)? true: false; */
    }

    else {
        return number + ' is even';

    }
}
console.log(isOdd(number));

// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.

console.log(isOdd(random));

///////

function add(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    } else {
        console.log("inputs must be numeric");
    }
}




function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

console.log("the sum is " + add(1, 1));
console.log("the difference between 20 and 5 is " + subtract(20, 5));
console.log(multiply(5, 4));

function square(number){
    return multiply(number, number);
}


function sumOfSquares(a, b){
    return add(square(a), square(b));
}























