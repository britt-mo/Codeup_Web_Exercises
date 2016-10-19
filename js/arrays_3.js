/**
 * Created by brittmo on 10/12/16.
 */
'use strict';

var band = ['john', 'paul', 'ringo', 'george', 'yoko'];

band.forEach(function (name, i) {
    var firstLetter = name[0].toUpperCase();
    var restOfString = name.substring(1);
    var result = firstLetter + restOfString;
    band[i] = result;

});
console.log(band);

var total = 1;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (number, i) {
    total *= number;
});
console.log(total);


//write a function that returns a string containing the html necessary for an unordered list with an <li> for each person
//on your names array


var htmlTable = '<ul>';
band.forEach(function (name) {
    htmlTable += '<li>' + (name) + '</li>';
});
htmlTable += '</ul>';
console.log(htmlTable);

// take an array of strings containing all the states


//make another function that returns a new array of all the states >= two "s" characters


// make a function that squares each number on an array
//  take an array of numbers and make a forEach that multiplies each number by itself
// function should return the arrayOfSquares


// write a function that takes an array of lowercase names
// Uppercase the first letter of each name
// and returns only the names that start with "Y"

//  write a function that takes an array of numbers 1-10
// return the sum of only the numbers divisible by 3

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'Wisconsin', 'West Virginia', 'Wyoming'];
// and return only states that start w/ letter T



function startsWithT(element){
        return element[0] == 'T';
}
function contains2SOrMore(element){
    return element.indexOf('s') < element.lastIndexOf('s');
}
function arrayFilter(elements, filter){
    var i, filteredElements = [];
    for(i = 0; i < elements.length; i++){
        if(filter(elements[i])){
            filteredElements.push(elements[i]);
        }
    }
    return filteredElements;
}
console.log(arrayFilter(states, startsWithT));

console.log(arrayFilter(states, contains2SOrMore));

//create a function that returns a new array of all the states >= two "s"




//function should return an array of squares

function squares(numbers) {
    var squared = [];
    numbers.forEach(function (number) {
        squared.push(number * number);
    });
    return squared;
}

console.log(squares([2, 10, 11, 8, 5]));


function lowercaseNamesWithY(names) {
    var namesWithY = [];
    names.forEach(function (name) {
        if (name[0].toUpperCase() == 'Y') {
            namesWithY.push(name.substring(0, 1).toUpperCase() + name.substring(1));
        }
    });

    return namesWithY;
}

console.log(lowercaseNamesWithY(['ringo', 'john','paul', 'yoko', 'george']));


//function takes numbers 1-10
//returns the sum of numbers divisible by 3

function divisibleByThree(numbers){
    var sum = 0;
    numbers.forEach(function(number){
       if(number % 3 == 0){
           sum += number;
       }
    });
    return sum;

}
console.log(divisibleByThree([1, 3, 6, 7, 9, 12]));





