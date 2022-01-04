// control statements are two Types,they are
// 1. looping statements
// 2. conditional statements

//1.looping statements

// var bool = false;
//  do{
//      console.log("in do block "+bool);
//  }
//  while(bool){
//      console.log("in while block"+bool);
//  }
var num = 5

do{
    console.log("in do block "+num);
   num++;
}
while(num>5 && num <=10);

//  while(bool){
//        console.log(bool);
//        bool = false;
//  }

var n=0;

 while( n<=5){
     console.log(n);
    //  n<=5;
     n++;
 }
 //loops
//for(initialization;condition checking;increment/decreament);{
    //        //..........
//}

for(s=15;s>=10;s--){

  console.log(s);
}
// for(i=0;i<=5;i++){
//   console.log(i);
// }


var personObj = {
  name : "ANUSHA",
  age :22,
  qualification :"MSC",
  nativeplace : "Ongole",
  worklocation : "Hyderabad"
}
// personObj['qualification']

for (var s in personObj){
  console.log(s, personObj[s]);
}

let name= "Hema Chandra"
for (var i of name){
  console.log(i);
}
// var personObj = {
//     name :  "Hema",
//     age : 30,
//     qualification : "MCA",
//     nativeplace : "Ongole",
//     worklocation : "Hyderabad"
// }

for (var h in personObj){
  console.log(h, personObj[h]);
}
// for(var x=0;x<10;x++){
//     console.log(x);
// }


//2. conditional statements

var bool = true;

// if(condition){//true"...Excute this set of statements"
// }else if(condition2){
//       ""
// }else if(condition3){

// }
// else{
//     "...Excute when the condition is not true"
// }
// let randomNum = Math.ceil(Math.random() *100);
var randomNum=35;

if(randomNum>50){
  console.log(randomNum + " is greater than 50");
}
else if(randomNum<50){
  console.log(randomNum + " is less than 50");
}

else{
  console.log(randomNum + " is equal to 50");
}


let randomnum=0.5;
// randomnum = Number(randomnum);

switch (true){
case (randomnum>50):
  console.log( "Number  grater than 50");
  break;
  case (randomnum<50):
  console.log( "Number less than 50");
  break;
  case (randomnum==50):
    console.log( "Number equal to 50");
    break;
    default:
    console.log( "its not a number");
    break;

}

   //if
   x="anu"
   if(x="anu"){
     Result = true;
   }
   console.log(Result);

  //if-else
 x=15;
  if(x<12){
      Result="true";
  }else{
    Result="false";
  }
  console.log(Result);
//else-if
  x=15;
  if(x<12){
      Result="false";
  }else if(x==12){
    Result="false";
  }else if(x>12){
    Result="true";
  
  }else {
    Result="true";
  }
  console.log(Result);

  
//switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    
}
console.log(day);

//let num = 1;
try {
  num.toPrecision(1000);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name);
}
