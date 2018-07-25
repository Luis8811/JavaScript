// code to show the use of try catch, finally and for in

//return the factorial of the param
function factorial(numberToCalculate){
    if(numberToCalculate == 0 || numberToCalculate == 1){
       return 1;
    }else{
        return (numberToCalculate * factorial(numberToCalculate-1));
    }
}

// It creates a table of count+1 rows. Each row is the factorial of a number. The first factorial is obtained from start, the second from (start + 1), the third from (start + 2) ...
function calculateTableOfFactorials(start, count){
    if(isNaN(start) || isNaN(count)){
        alert("Error en las entradas. Debe introducir números enteros positivos.");
        return new Array(0);
    }
    var arrayOfFactorials = new Array(count+1);
    for(var i = 0; i < arrayOfFactorials.length; i++){
       arrayOfFactorials[i] = factorial(start+i);
    }
    return arrayOfFactorials;
}

