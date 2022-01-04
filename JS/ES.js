
//range error

let num = 1;
try {
  num.toPrecision(1000);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name);
}

var numberx=6;
try{
 if(numberx >5){
    throw "number is bigger than 5";
 }
}catch(error){
    console.log(error);
}
//reference error

let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log(err);
}
//syntax error

try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    console.log(err);
  }
  
  //type error

  let num1 = 1;
  try {
    num1.toUpperCase();   // You cannot convert a number to upper case
  }
  catch(err) {
    console.log(err);
  }

  try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err){

  console.log(err);
  }

//work in console
// localStorage.setItem('age',30);
// localStorage.getItem('age');
// sessionStorage.setItem('age',30);