//=============Swapping of two numbers using JavaScript=========  

let a = prompt("Enter the number");
let b = prompt("Enter another number");

console.log('Value of a '+ a +' and b '+ b +' Before swap' );

let tamp;

tamp = a;
a = b;
b = tamp;

console.log(`Value of a ${a} and b ${b} After swap`);

//=========================Es6 Methode====================

let num1 = 2;
let num2 = 99;

[num1,num2] = [num2,num1] // destructuring assignment

console.log(`First number ${num1} and second number ${num2} with es6 methode`);


