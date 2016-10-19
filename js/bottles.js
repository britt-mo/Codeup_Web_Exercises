/**
 * Created by brittmo on 10/7/16.
 */
'use strict';



var bottlesOfBeer = 99;

while(bottlesOfBeer > 0);
    if(bottlesOfBeer == 2) {
        console.log(bottlesOfBeer + " bottles of beer on the wall ");
        console.log(bottlesOfBeer + " bottles of beer ");
        console.log(" Take one down pass it around... ");
        console.log((bottlesOfBeer - 1) + " bottle of beer on the wall ");

        //if bottlesOfBeer is 1, then use "bottle" instead of "bottles"
    }else if(bottlesOfBeer ==1){
        console.log(bottlesOfBeer + " bottle of beer on the wall ");
        console.log(bottlesOfBeer + " bottle of beer ");
        console.log(" Take one down pass it around ");
        console.log(" No more bottles of beer on the wall ")
    }else {
        console.log(bottlesOfBeer + " bottles of beer on the wall ");
        console.log(bottlesOfBeer + " bottles of beer ");
        console.log(" Take one down pass it around ");
        console.log(bottlesOfBeer + " No more bottles of beer on the wall ");
    }
    bottlesOfBeer--;
}
 console.log(" someone should go to the store");