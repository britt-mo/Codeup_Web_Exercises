/**
 * Created by brittmo on 10/10/16.
 */

"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var nameIs;
do{
    nameIs = prompt ("What is your name?");
} while (nameIs == null || nameIs.trim() == '');
//positioning is imoprtant here; is (nameIs == null) is false then the second half won't be checked.


alert("Hello " + nameIs + "!");

// TODO: Show an alert message that welcomes the user based on their input.

if(confirm("Do you want to enter this site?")){
    alert("Welcome");
}else {
    alert("Goodbye");
}



// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
var likesPizza;
likesPizza = confirm("Do you like pizza?");
if(likesPizza){
    alert("You're correct");
}else {
    alert ("You're wrong");
}