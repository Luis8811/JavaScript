//this script is for study datatypes in JavaScript
// In this script I use the prompt

// this function converts fahrenheit degrees to centigrade degrees
function fahrenheitToCentigrade(fahrenheitTemp){
  if(isNaN(fahrenheitTemp)){
      alert("You must enter a fahrenheit temperature, a number");
      return;
  }
  var centigradeDegree = 5/9 * (fahrenheitTemp - 32); // equation
  return centigradeDegree;
}