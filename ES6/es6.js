
//using es6
displayName = () => { 
    //block of code
    console.log('alex');
}
displayName();
displayName = () => 'alex';

//default function arguments
function add(x,y=25){
    return x + y;
}
let sum = add(5);
console.log(sum);
console.log(add);

//array helper function

//map
let arrVal = [10,20,30,40,50];
console.log(arrVal.length);
 
for(var i = 0; arrVal.length > i; i++){
    console.log(arrVal[i]);
}

//syntax
//arrVal.map(() =>{

//});

arrVal.map(() =>{

});

let arrResult = arrVal.map((h, i, j) => {
    console.log(h); //array elem
    console.log(i); //index values
    console.log(j); //array itself
    return h;
    // return i;
    // return j;

});
console.log(arrResult);

//filter
//to filter an array elements based on some test

let filterData = arrVal.filter((h, i, j) => {
       return h <=30;
});
console.log(filterData);

//foreach

var color = ['blue', 'green', 'black']
color.forEach((h, i, j) => {
 console.log(h);
});

//find : will return the value on the first element that pass the test

let num = [90, 80, 70, 60, 50];
let h = num.find(e => {
   return e <=65;
});
console.log(h);

//reduce :will reduce the array to a single value

let numbers = [90, 80, 70, 60, 50];
let sumVal = numbers.reduce((total, num, i, numbers) => {
   console.log(total);
   console.log(num);
   return total + num;
});
console.log(sumVal);

//some :any of the element pass the test
//return boolean value

let ages = [5, 10, 15, 20, 25, 30, 35, 40];
let age = ages.some(a => {
 return a >=20;
});

console.log(age);

//every : all the elements pass the test
//returns boolean value

let age1 = [5, 10, 15, 20, 25, 30, 35, 40];
let ageVal = age1.every(a => {
 return a >=18;
});

console.log(age1);
console.log(ageVal);



//task
//use es6: array helper functions, arrow function, let, const

//round off all the numbers in an array and sum them [9.7, 6.4, 3.8, 2.9, 6.8]

//check if a particular the property value(firstName) in the array of object is same or not
// [{
//     firstName: 'alina',
//     age: ,
//     id: 2
// }, {
//     firstName: 'alina' ,
//     age: ,
//     id: 3
// },
// {
//     firstName: 'alina',
//     age: ,
//     id: 4
// }]


//get the value of the first element in an array that has val