/**
 * Created by brittmo on 10/17/16.
 */
'use strict';
var numberButtons = document.getElementsByClassName("numbers");
var displayNum = "";
var storedNum = 0;
var operation = 0;
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

    var evalDisplay = Number(displayNum);
    var evalStored = Number(storedNum);


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


    if (displayNum !== "" && storedNum !== 0) {
        console.log("evalStored is " + evalStored);
        console.log("evalDisplay is " + evalDisplay);
        storedNum = doOperation(evalDisplay, evalStored);
        console.log("storedNum is " + storedNum);
        display.value = '';
    } else {
        storedNum = display.value;
        display.value = '';
    }
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
    if (operation != 0) {
        calculationFinished = true;
        operation = 0;
        displayNum = "";
        storedNum = "";
    }
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


