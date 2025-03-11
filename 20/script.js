///Check the Number of Occurrences of a Character in the String 

let string = prompt('Please enter a string')
let letter = prompt('Please enter a letter')
let strLen = string.length;
let counter = 0;

for (let i = 0; i < strLen; i++) {
  if(string[i] == letter){
    counter++;
  }
}
console.log(`${string} => ${letter} => ${counter}`);
