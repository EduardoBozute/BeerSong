var count = 99;

function beer(){
    while(count > 0){
        if (count>= 2){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.")
            console.log("Take one down and pass it around, " + (count-1) + "bottles of beer on the wall.")
        } else {
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.")
            console.log("Take one down and pass it around, no more bottles of beer on the wall.")
        }
        count--;
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer.")
    console.log("Go to the store and buy some more, " + (count+99) + "bottles of beer on the wall.")
}