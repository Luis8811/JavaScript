//basic work with arrays in JavaScript
function getMax(arrayOfNumbers){
    // this function returns the max of the array
    if(arrayOfNumbers.length <= 0) return;
    var max = arrayOfNumbers[0];
    for(var i = 0; i < arrayOfNumbers.length; i++){
       if(arrayOfNumbers[i] > max){
           max = arrayOfNumbers[i];
       }
    }
    return max;
}

//this function prints the array
function printArray(array){
 for(var i=0; i<array.length; i++){
     document.write(array[i]);
     if(i< array.length-1){
         document.write(", ");
     }
 }
}