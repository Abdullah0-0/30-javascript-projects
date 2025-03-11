//Count the Number of Vowels in a String using Regex 

let string = prompt ('pls enter a string')
const reg = /[aeiou]/gi;
let chars = string.match(reg);
console.log(chars.join(','));

