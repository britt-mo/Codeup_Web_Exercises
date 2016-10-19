/**
 * Created by brittmo on 10/10/16.
 */
/*
 Sometimes, a condition independent of the loop condition will occur that gives reason to exit the loop.
 The break keyword allows you to exit the loop at any time.
 Code execution in the loop will immediately halted and the loop will not continue.
*/


var luckyNumber;
var customerCount = 0;

while (true) {
    luckyNumber = Math.floor(Math.random() * 5) + 1;
    //number 5, your payment will be zero.
    if (luckyNumber == 5) {
        break;
    }
    customerCount++;
}
console.log(customerCount);


var i, receipt;

for (i = 0; i < 10; i++) {
    receipt = Math.floor(Math.random() * 300);
    if (receipt < 200){
        continue;
    }
}
console.log(receipt);


var i, j;

while ((i % 2) == 0) {
    i = Math.floor((Math.random() * 50) + 1);
}
console.log("This is the number I'm skipping: " + i);

for (j = 1; j <= 50; j++) {
    if ((j % 2) == 0) {
        continue;
    } else if (j == i){
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("This is odd number: " + j);
}

//












