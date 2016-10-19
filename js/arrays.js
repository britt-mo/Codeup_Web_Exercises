/**
 * Created by brittmo on 10/11/16.
 */
'use strict';


var names = ['Ana', 'Brandon', 'Cindy', 'Derek', 'Ellen', 'Frank', 'Grace'];

console.log(names[0]);
console.log(names[1]);

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(function(name, index, array){
    console.log(name);
})
 //use a for loop to iterate through the array and get the average

var grades = [100, 80, 90, 80, 50];
    function average(grades){
    var sum = 0;
for(var i = 0; i < grades.length; i++){
        sum += grades[i];
}
    return sum / grades.length;
}
var grade = average(grades);
console.log("you made a grade of " + grade);




///

// declare and initialize array
var shapes = ['square', 'rectangle', 'circle', 'triangle'];


    var logElement = function (element, index, array){

    // element is the shape name
    // index is the iterator
    // array is the shapes array itself

    console.log('The shape at index ' + index + ' is: ' + element);
};
logElement("crazy circle", 100, []);

// loop through the array and log the values
shapes.forEach(logElement);

