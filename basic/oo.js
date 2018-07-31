// Object Oriented JavaScript

// this function returns another array of lenght equal to top.
function topFromArray(arraySource, top){
  var result = new Array(top); 
  var anotherArray = arraySource.sort();
  for(var i = 0; i < top; i++){
      result[i] = anotherArray[i];
  }
  return result;
}

// type Student in JavaScript

//constructor 1
function Student(name, sex, age, country){
if(arguments.length===0){
 this.nameOfStudent = "John Doe";
 this.sexOfStudent = "Male";
 this.ageOfStudent = 30;
 this.countryOfStudent = "USA";
}else{
  if(arguments.length===1){
    this.nameOfStudent = name;
    this.sexOfStudent = "Female";
    this.ageOfStudent = 24;
    this.countryOfStudent = "Mexico";

  }else if(arguments.length===2){
    this.nameOfStudent = name;
    this.sexOfStudent = sex;
    this.ageOfStudent = 26;
    this.countryOfStudent = "Ecuador";

  }else if(arguments.length===3){
    this.nameOfStudent = name;
    this.sexOfStudent = sex;
    this.ageOfStudent = age;
    this.countryOfStudent = "Cuba";
  }else{
    this.nameOfStudent = name;
    this.sexOfStudent = sex;
    this.ageOfStudent = age;
    this.countryOfStudent = country;
  }
} 
 
 /*
 if(arguments.length===3){
   //emulando la sobrecarga debido a que puedo llamar a la función con los 3 primeros valores
   this.countryOfStudent = "Cuba"; 
 }else{
  this.countryOfStudent = country; // se define la propiedad countryOfStudent 
 }
  */
}



  //creando los métodos del tipo por referencia

   //es buena idea hacer métodos get/set en lugar de trabajar solamente con las propiedades
Student.prototype.getNameOfStudent = function(){
  return this.nameOfStudent;
}

Student.prototype.setNameOfStudent = function(name){
  this.nameOfStudent = name;
}

Student.prototype.getAge = function(){
  return this.ageOfStudent;
}

Student.prototype.setAge = function(age){
  this.ageOfStudent = age;
}

Student.prototype.getCountry = function(){
  return this.countryOfStudent;
}

Student.prototype.setCountry = function(country){
  this.countryOfStudent = country;
}

Student.prototype.getSex = function(){
  return this.sexOfStudent;
}

Student.prototype.setSex = function(sex){
  this.sexOfStudent = sex;
}


// Un nuevo método definido en el tipo por referencia JS
Student.prototype.getAllInfoOfStudent = function(){
  return this.getNameOfStudent() + ", " + this.getCountry() + ", " + this.getSex() + ", " + this.getAge().toString(); 
}

