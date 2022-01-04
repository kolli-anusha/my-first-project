// The below function is used to show the alert in form submit
function formSubmitClick(){
    alert('Hii KEERTHI'); console.log(z);
}
  // var x = 10, y =5 , z =x+y;
//    x=10;
//    var y = 5;
//    y=5;
//    var z = x+y;
//    z=x+y;
  // alert (z);
  
  var anusha12222 = 22222;
  console.log(anusha12222);
 /* if(x>5){
      console.log;
  }
  
      var a=" anusha";
    //   var b="adi";
    // console.log(b);

      console.log(a);
    
      
         function text(){
              let b = "padma";
            //   var b="adi";
               console.log(b);
          }
      
    text();

   
    var x;
    {
      var x;
      x=5;
      x=10; 
      console.log("my x value is :" +x);
    }
   
 const num = 5;
 console.log(num);

 const A = 12;
 
 {
   const A = 43;
 console.log(A);
 }
 {
  const A = 90;
console.log(A);
}
{
  const A = 100;
console.log(A);
}
console.log(A);

//arithmetic operators

var a=15,b=10;
var c=a+b;
var d=a-b;
var e=a*b;
var f=a/b;
var g=a%b;
 
console.log(c,d,e,f,g);
var a=15,b=2;
var u=a**b;
console.log(u);

//increment operators

var q=10;
q++;             //post increment
console.log(q);
++q;           //pre increment
console.log(q);
//decrement operators
var  r=5
 a=r--;
console.log(a,r);
var  r=5
 a=--r;
console.log (a,r);

 // comparison operatorss
 let h=10,i=20,j=10;
 let v=h;
 //let z=h==j;
 //let z= h===j;
  //let z= h==v;
 //let z= h!=i;
 //let z= h>i;
 //let z=h<i;
 //let z=h>=i;
 let z=h<=i;
  console.log(z);*/
  
 //logical operators
  let k=5,l=10;
   (k!=l) &&(k<l);
   (k>l) ||(k==l);
 
  (k<l) ||(k==l);

  !(k>l);
 !(k<l);
 console.log((k!=l) &&(k<l),(k!=l) &&(k<l), (k<l) ||(k==l),!(k>l),!(k<l));
 
 /*//assignment operators
let m=5,n=10;
m=n;
m += 2;
m -= 5;
m *= 10;
m /= 15;
m %= 2;
console.log(m=n, m += 2,  m -= 5, m *= 10, m /= 15, m %= 2);
 var s=2;
 t =s**= 8;
 t =s*= 6;
 console.log(t);*/


//bitwise operators
let b=5,c=10;          //0101  //1010
console.log(b&c);
console.log(b|c);
console.log(b^c);
console.log(~c);
console.log(~-b);
console.log(b>>c);
console.log(b<<c);
console.log((0b100101).toString(8));
console.log((8).toString(2));
console.log((0b111101).toString(10));
console.log((0b111101).toString(16));
console.log((0b111101).toString(32));

//data types

// int d = 10;
// float e = 15.5;

var num=10;       //number
var n=10;
console.log(typeof num);
var y="anu";       //string
var z="11234";      //string
console.log(num+n+y);
console.log(y+n+num);
console.log(n+num+y+n);

var arr =["anu",'adi',"true"]
console.log(typeof arr);
// var obj = {fname:"anusha",    //object literal
//            lname:"kolli",
//           qualifbication:"msc",
//         id:222        };
//         console.log(obj);
var obj = new Object();           //object constructer
    obj.fname="anusha";    
        obj.lname="kolli";
          obj.qualifbication="msc";
        obj.id=222;  
        console.log(obj, typeof obj);
var bool = true;     //boolean
var bool = "true";    //string boolean
var abc = undefined;   //undefined
var xyz;     //undefined
console.log(typeof xyz);
var q = "anu fkdsajflkds anu fjdsalkfjslkre anu jflkdsajflksad anu fajdlkfsa AnU kjfldsjfdsl ANU"; //String
console.log(q.length);
q=q.replace(/anu/ig, "Devi");
console.log(q);
//console.log(q.indexOf(""));

function getNumberofWords(e){
  var d = e.target.innerHTML;
  var repeatArr = d.match(/anusha/ig);
alert(repeatArr.length);
  
}
var num = 22/7;
console.log(num.toFixed(0));
var num1 = "2000";
console.log(typeof num1);
num1 = Number(num1) ;
console.log(typeof num1);
var num2 = 100;
console.log(typeof num2);
num2 = num2.toString() ;
console.log(typeof num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(-12/0);

//string mwthods
// let str = "Apple, Banana, Kiwi";
//  str = str.slice(7, 13);
// console.log(str);
// let str = "Apple, Banana, Kiwi";
 //str = str.slice(-12, -6);
 //console.log(str);
 let str = "Apple, Banana, Kiwi";
 str = str.slice(14);
 console.log(str);


 
//arrays

// const arr = ["Naveen","Chandra", "Naveen Chandra"]; 
const arr1 = [];
arr1[0]= "Naveen";
arr1[1]= "Chandra";
arr1[2]= "Naveen cHAndrA"; //using index we can elementi[[[]]]

const arr2 = new Array("Naveen", "Chandra", "Naveen Chandra");
console.log(arr2);

const friuts = ["banana","orange","apple","mango"];
 //friuts.push("kiwi","lemon");
 //friuts.pop("kiwi","lemon");
 //friuts.unshift("kiwi","lemon");
 friuts.shift("kiwi","lemon");
console.log(friuts);

// let filteredPersonArr = personsArr.filter(function(emp){
//   return emp.rating == 1;
// });
// let filteredPersonArr = personsArr.filter(function(person){
//   return person.rating == 1;
// });

var exArr = [0,1,2,3,4,5,6,7,8,9];
 var exArrsplited = exArr.slice(4,8);
console.log(exArr,exArrsplited);

var points = [20,40,40,60,50,100,20,55,90];
points.sort(function(a, b){return a - b}); //ascending order sorting
//points.sort(function(a, b){return b - a}); //descending order sorting
console.log(points);

var max = function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

var min = function pointsMin(arr){
    return Math.min.apply(null,arr);
}
console.log(points,max(points),min(points));

//functions
function add(parm1,parm2){
  return parm1+parm2;
}

var _parm = add(10,20);
console.log(_parm);

function sum(x,y){
  return x+y;

}
var _sum = sum(10,5);
console.log(_sum);

function convertgramstokgs(grams){
  return grams/1000;
}
console.log(convertgramstokgs(900));
console.log(convertgramstokgs(10000));

function convertkgstograms(kgs){
  return kgs/100;
}

console.log(convertkgstograms(10000));

function getremainder(x,y){
  return x%y;
}
var z = getremainder(611,50);
console.log(z);

// var sumArr = [];
// function getBtnvalue(btn,e){
//  document.getElementById("display").value += e.target.innerHTML;   
// }

//   document.getElementById("add").addEventListener("click",function(e){
//     sumArr.push(document.getElementById("display").value);
//     document.getElementById("display").value = "";
//   });

// document.getElementById("equalto").addEventListener("click",function(e){
// var sum = 0;
// sumArr.forEach(function(ele,index){ sum += Number(sumArr[index]); });
// document.getElementById("result").value = sum;
// });

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

function anu(e){
console.log(e.target.innerHTML);
}

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function preferedBrowser() {
  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function myFunction() {
  document.getElementById("miss").innerHTML = "Hello My Teammates";
}
// function loadimg(){
  
//   alert("img is loaded");
// }
function myFunction() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("exa").innerHTML = txt;
}

function btnHello(xy){
  
  var r = xy.innerHTML +""+document.getElementById("Hello").value;
  alert(r);
};


const date1 = new Date()
const date2 = new Date(2021, 11, 10, 7, 12, 33, 999)
const date3 = new Date(1000000000000);
const date4 = new Date("December 10, 2021 07:13:00");
const date5  = new Date("10/25/2021");// short date
const date6  = new Date("Mar 25 2015");
const date7 = new Date("Jan 25 2015");
let msec = Date.parse(new Date()); // get milliseconds after Jan 1st 1970
console.log(date1,date2,date3,date4,date5,date6,date7,msec);
console.log(date1.getFullYear(),date1.getMonth(),date1.getDate(),date1.getHours(),date1.getMinutes(),date1.getSeconds(), date1.getDay(),Date.now());
// setDate()  // Set the day as a number (1-31)
// setFullYear()  // Set the year (optionally month and day)
// setHours() // Set the hour (0-23)
// setMilliseconds()  // Set the milliseconds (0-999)
// setMinutes()   // Set the minutes (0-59)
// setMonth()  //Set the month (0-11)
// setSeconds()    //Set the seconds (0-59)
// setTime()   //Set the time (milliseconds since January 1, 1970)
//  setFullYear()   //The Method

function demoThis(){
  console.log(this);
}

var obj = {
  a:2,
  b:4,
  demoThisInObj: function(){
      console.log(this);
  }
}

obj.demoThisInObj();
//demoThis();
window.demoThis();
console.log(this);

function dragStart(e){
  // (e.target).src="pic_bulboff.gif";
    e.dataTransfer.setData("images",e.target.id);
    
}
function dropallowed(e){
    e.preventDefault();
   
}
function dropCompleted(e){
    
    e.preventDefault();
    var dragabbleID = e.dataTransfer.getData("images");
    if(dragabbleID == "draggableImg1,draggableImg,draggableImg2")
    document.getElementById(dragabbleID).src="C:\Users\home\Desktop\Images\swamy.jpg";
   
  // document.getElementById(dragabbleID).style.top = e.clientY+"px";
  //  document.getElementById(dragabbleID).style.left = e.clientX+"px";

    e.target.appendChild(document.getElementById(dragabbleID));
   
}

function findGeoLocation(){
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(populateCoordinates)
    }
}
function populateCoordinates(position){
    console.log(position)
    document.getElementById('geoIdentifier').innerHTML = "Your current Location is : " + position.coords.latitude  +"<br>" + position.coords.longitude;
     
}

var openedWindow;
    function openWindow(){  openedWindow   =  window.open("","openedWindow","width=200,height=300");
    openedWindow.document.write("<h1>This is My Opened Windo'</h1>");}
    function closeWindow(){openedWindow.close();}  

   