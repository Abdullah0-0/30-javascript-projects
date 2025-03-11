//replace characters of string 

let str = 'He has a red car and a Red bike';

let reg = RegExp('red','gi')
let newStr = str.replace(reg, 'blue');

console.log(newStr);
