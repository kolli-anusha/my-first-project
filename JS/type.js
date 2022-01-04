//convert string to number
var x ="5.5";
// y=typeof(x)
// console.log(x,y);
// z=Number(x);
// console.log(z,typeof(z));
var y =+x;
console.log(y,typeof(y));
console.log(y,parseInt(y));
console.log(y,parseFloat(y));

//convert number to string
var x = 5;
 y=typeof(x);
console.log(x,y);
z =y.toString(y);
console.log(z,typeof(z));

//convert date to number
 d = new Date();
 console.log(d);
 d = new Date();
 console.log(d.getTime());

 //convert  number to date
  var x = 12-11-2000
y =typeof(x);
z = Date(y);
 console.log(y,z);


 //convert boolean to number
 var x = true;
 y = typeof(x);
 z=Number(x);
 console.log(y,z,typeof(z));

 //convert boolean to string
 var y=false;
 x = typeof(y);
 t=Number(y);
 z = String(y);
 console.log(x,z,t,typeof(z));


