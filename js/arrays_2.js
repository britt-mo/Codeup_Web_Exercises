/**
 * Created by brittmo on 10/12/16.
 */

var names, shapes, i;

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
var names = ['Ana', 'Brandon', 'Cindy', 'Derek', 'Ellen', 'Frank', 'Grace'];

function createHtmlTable(items) {
    var htmlTable = '<table>';

    for (i = 0; i < items.length; i++) {
        htmlTable += '<tr><td>' + i + '</td><td>' + items[i] + '</td></tr>';
    }

    htmlTable += '</table>';
}

function itemsMatching(items, text){
    var itemsMatched = [];
    for (i = 0; i < items.length; i++){
        if(items[i].toLowerCase().indexOf(text) !== -1){
            itemsMatched.push(items[i]);
        }
    }
    return itemsMatched;
}

var shapesWithC = [];
for (i = 0; i < shapes.length; i++){
    if(shapes[i].toLowerCase().indexOf("c") !== -1){
        shapesWithC.push(shapes[i]);
    }
}
htmlTable = createHtmlTable(shapesWithC);
console.log(htmlTable);

var namesWithC = [];
for (i =0; i <names.length; i++){
    if(names[i].indexOf("c") !== -1){
        namesWithC.push(names[i]);
    }
}

createHtmlTable(shapes);
//you can delete this code below, bc the fuction above is doing the same thing.
/*
var htmlTable = '<table>';

for (i = 0; i < shapes.length; i++) {
    htmlTable += '<tr><td>' + i + '</td><td>' + shapes[i] + '</td></tr>';
}

htmlTable += '</table>';
 */

//console.log(htmlTable);






//<table>
//    <tr>
//        <td>index</td>
//        <td>element</td>
//</tr>
//</table>

createHtmlTable(names);
/* getting rid of code below bc function above does the same thing
var htmlTable = '<table>';

for (i = 0; i < names.length; i++) {
    htmlTable += '<tr><td>' + i + '</td><td>' + names[i] + '</td></tr>';
}

htmlTable += '</table>';
*/

// console.log(htmlTable);

/*
'use strict';
var shapes, names, i, htmlTable;
shapes = ['square', 'rectangle', 'circle', 'triangle'];
names = ['Barry', 'Jessica', 'Clark'];

function createHtmlTable(items) {
    var htmlTable = '<table>';
    for (i = 0; i < items.length; i++) {
        htmlTable += '<tr><td>' + (i + 1) + '</td><td>' + items[i] + '</td></tr>';
    }
    htmlTable += '</table>';
    return htmlTable;
}
function itemsMatching(items, text) {
    var itemsMatched = [];
    for (i = 0; i < items.length; i++) {
        if (items[i].toString().toLowerCase().indexOf(text) !== -1) {
            itemsMatched.push(items[i]);
        }
    }
    return itemsMatched;
}
var shapesWithC = itemsMatching(shapes, "c");
htmlTable = createHtmlTable(shapesWithC);
console.log(htmlTable);

var namesWithC = itemsMatching(names, "c");
htmlTable = createHtmlTable(namesWithC);
console.log(htmlTable);

    */


var arrayOfNumbers = [1, 2, 3, 4, 5];
for(var i = 0; i < arrayOfNumbers.length; i++) {
    console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
}

arrayOfNumbers.forEach(function(element, index, array){
    console.log("The element at index " + index + " is " + element) ;
});

newArray = [];
[1, 2, 3, 4, 5].forEach(function(element, index, array){
    newArray.push(element + 1);
});




arrayOfEvens = [];
[1, 2, 3, 4, 5].forEach(function(element, index, array){
    if(isEven(element)) {
        arrayOfEvens.push(element);
    }
});

var sum = 0;
[1, 2, 3, 4, 5].forEach(function(element, array) {
    sum += element;
});