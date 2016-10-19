/**
 * Created by brittmo on 10/17/16.
 */
'use strict';
var numberButtons = document.getElementsByClassName("numbers");
var displayNum = "";
var storedNum = "";
var operation = 0;
var operations = 0;
var calculationFinished = false;


for (var i = 0; i <numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        numInput(this.value);
    })
}


document.getElementById("add").addEventListener("click", function(){
    setOperation(this.value);
});
document.getElementById("subtract").addEventListener("click", function(){
    setOperation(this.value);
});
document.getElementById("multiply").addEventListener("click", function(){
    setOperation(this.value);
});
document.getElementById("divide").addEventListener("click", function(){
    setOperation(this.value);
});
document.getElementById("clear").addEventListener("click", function(){
    clearDisplay();
});
document.getElementById("decimal").addEventListener("click", function(){
    insertDecimal(this.value);
});
document.getElementById("evaluate").addEventListener("click", function(){
    calculate();
});
document.getElementById("sqrt").addEventListener("click", function(){
    setOperation(this.value);
});
document.getElementById("exponent").addEventListener("click", function(){
    setOperation(this.value);
});


function clearDisplay() {
    var display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    operations = 0;
    display.value = displayNum;

}



function numInput(num) {
    var display = document.getElementById("display");
    display.value += num;

}

function insertDecimal(dec) {
    var display = document.getElementById("display");

    for (var i = 0; i < display.value.length; i++)
        if (display.value.charAt(i) == '.') {
            return;
        }
    display.value += dec;
}



function setOperation(command) {
    var display = document.getElementById("display");
        displayNum = display.value;

    var evalDisplay = eval(displayNum);
    var evalStored = eval(storedNum);


    if (command == '+') {
        operation = 1;
    }
    else if (command == '-') {
        operation = 2;
    }
    if (command == 'x') {
        operation = 3;
    }
    if (command == '/') {
        operation = 4;
    }
    if (command == '√') {
        operation = 5;
    }
    if (command == '^') {
        operation = 6;
    }


    if(displayNum !== "" && storedNum !== "") {
        storedNum = doOperation(evalStored, evalDisplay);
        display.value = '';
    } else {
        storedNum = display.value;
        display.value = '';
    }

    //if (operations == 0) {

    //}
    /*else if (operations == 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (operations == 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (operations == 3) {
        storedNum = evalStored * evalDisplay;
    }
    else if (operations == 4) {
        storedNum = evalStored / evalDisplay;
    }
    else if (operations == 5) {
        displayNum = Math.sqrt(evalStored);
    }
    else if (operations == 6) {
        displayNum = Math.pow(evalStored);
    }
*/

    //display.value = '';
}

function calculate() {
    var display = document.getElementById("display");
    displayNum = display.value;
    var evalDisplay = eval(displayNum == "" ? storedNum : displayNum),
        evalStored = eval(storedNum);

/*    if (displayNum == "") {
        evalDisplay = storedNum;
    } else {
        evalDisplay = displayNum;
    }*/

    displayNum = doOperation(evalDisplay, evalStored);


    display.value = displayNum;
    if (operation != 0)
        calculationFinished = true;
    operation = 0;
    operations = 0;
    displayNum = "";
    storedNum = "";
}

function doOperation(evalDisplay, evalStored) {
    if (operation == 1) {
        return evalStored + evalDisplay;
    }
    else if (operation == 2) {
        return evalStored - evalDisplay;
    }
    else if (operation == 3) {
        return evalStored * evalDisplay;
    }
    else if (operation == 4) {
        return evalStored / evalDisplay;
    }
    else if (operation == 5) {
        return Math.sqrt(evalStored);
    }
    else if (operation == 6) {
        return Math.pow(evalStored, evalDisplay);
    }
}


