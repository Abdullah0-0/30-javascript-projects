// reverse a string using for loop  

let string = prompt('Enter')
let strLen = string.length;
var revStr = '';

 for (let i = strLen-1; i >= 0; i--) {
  revStr += string[i];

 }
console.log(`${string} reverse is ${revStr}`);

