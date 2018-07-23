//this code is about multidimensional arrays in JavaScript


function createFighters(){
//this example create a two dimensional array
var personnel = new Array(3);
personnel[0] = new Array(3); 
personnel[0][0] = "Country:"; 
personnel[0][1] = "Japan"; 
personnel[0][2] = "China"; 
personnel[1] = new Array(3); 
personnel[1][0] = "Name:"; 
personnel[1][1] = "Ryu Matsumura (Karate)"; 
personnel[1][2] = "Li Wei (Wu shu)"; 
personnel[2] = new Array(3); 
personnel[2][0] = "Age:"; 
personnel[2][1] = "29"; 
personnel[2][2] = "31";
return personnel;
}

//this function prints a bidimensional array
function printMatrix(twoDimensionalArray){
    for(var i=0; i<twoDimensionalArray.length; i++){
     for(var j=0; j<twoDimensionalArray[0].length; j++){
         document.write(twoDimensionalArray[i][j]);
         document.write(" ");
     }
     document.write("<br>");
 }
}