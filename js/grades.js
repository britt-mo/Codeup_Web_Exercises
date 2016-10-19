/**
 * Created by brittmo on 10/11/16.
 */
'use strict';


/*

 Use a for loop to prompt the user for three grades.
 After reading those 3 grades, calculate the student's grade average
 Using an alert show the message You're awesome if the average is greater than or equals to 80. Show You need to practice more otherwise
 All this code should be inside of a function named average3Grades.
 In the same JS file create another function named genericGradesAverage
 Instead of a for use a do while.
 Use a confirm prompt to ask the student for more grades Add another grade? (Ok, Cancel). If the user clicks on Cancel stop asking for grades and calculate the average.
 The rest of the logic remains the same.
 Call the new function instead of average3Grades.
 */

//prompts are stored/seen as string. Use parseInt() to revert string to numbers.
//if you're going to do math on a variable, declare it and initialize it to a number;

/*

 example:

 var total = 0;

 for (var g = 0; g < 3; g++) {
 var grade = window.prompt('Type in your grade');
 total += parseInt(grade);

 //this while loop does not work properly. If you put a string first it
 // will not calculate the rest of the numbers inputted afterwards

 while(isNaN(grade) || (grade < 0 || grade > 100)){
 grade = parseInt(window.prompt('Type in a real grade'));

 }
 }
 function averageGrades() {

 if (total > 79) {
 alert("You're awesome!!! Your average is " + total / 3);
 }
 else {
 alert('Need some practice. Your average is  ' + total / 3);

 }
 } averageGrades();
 */


(function () {

function average3Grades() {
    var gradeAverage, sum = 0;
    for (var i = 0; i < 3; i++) {
        gradeAverage = prompt("Please input your grade");
        sum += parseInt(gradeAverage);
    }
    console.log(sum);

    if ((sum / 3) >= 80) {
        alert("You're awesome!");
    } else {
        alert("You need to practice more");
    }

}
average3Grades();


function genericGradesAverage() {
    var anotherGrade, addedSum = 0, gradesEntered = 0;
    do {
        anotherGrade = parseInt(prompt("enter grade"));
        addedSum += anotherGrade;
        gradesEntered++;
        var confirmation = confirm("Do you want to enter another grade?");
    } while (confirmation);
    return console.log(addedSum / gradesEntered);
}

var finalGrade = genericGradesAverage();
if (finalGrade >= 80) {
    alert("You're Awesome!");
} else {
    alert("You need more practice");
}

genericGradesAverage();

})();


