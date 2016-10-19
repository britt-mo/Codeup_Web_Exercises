/**
 * Created by brittmo on 10/17/16.
 */
'use strict';
var numberButtons = document.getElementsByClassName("numbers");
var displayNum = "";
var storedNum = "";
var operation = 0;
var queuedOperation = 0;
var calculationFinished = false;


for (var i = 0; i <numberButtons.length; i++){
    numberButtons[i].addEventListener("click", function(){
        numInput(this.value);
    })
}



function clearDisplay() {
    var display = document.getElementById("display");
    displayNum = "";
    storedNum = "";
    operation = 0;
    queuedOperation = 0;
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
    console.log(dec);
}



function setOperation(command) {
    var display = document.getElementById("display");
        displayNum = display.value;

    var evalDisplay = eval(displayNum);
    var evalStored = eval(storedNum);


    if (queuedOperation == 0) {
        storedNum = display.value;
    }
    else if (queuedOperation == 1) {
        storedNum = evalStored + evalDisplay;
    }
    else if (queuedOperation == 2) {
        storedNum = evalStored - evalDisplay;
    }
    else if (queuedOperation == 3) {
        storedNum = evalStored * evalDisplay;
    }
    else if (queuedOperation == 4) {
        storedNum = evalStored / evalDisplay;
    }


    if (command == 'add') {
        operation = 1;
    }
    else if (command == 'subtract') {
        operation = 2;
    }
    if (command == 'multiply') {
        operation = 3;
    }
    if (command == 'divide') {
        operation = 4;
    }


    queuedOperation = operation;
    display.value = '';
}

function calculate() {
    var display = document.getElementById("display");
    displayNum = display.value;
    var evalDisplay = eval(displayNum),
        evalStored = eval(storedNum);


    if (operation == 1) {
        displayNum = evalStored + evalDisplay;
    }
    else if (operation == 2) {
        displayNum = evalStored - evalDisplay;
    }
    else if (operation == 3) {
        displayNum = evalStored * evalDisplay;
    }
    else if (operation == 4) {
        displayNum = evalStored / evalDisplay;
    }

    display.value = displayNum;
    if (operation != 0)
        calculationFinished = true;
    operation = 0;
    queuedOperation = 0;
    displayNum = "";
    storedNum = "";
}



