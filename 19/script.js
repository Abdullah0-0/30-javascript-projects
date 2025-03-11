//Check Palindrome using for loop


let string = prompt('enter a string')
let len = string.length;
let msg = 'is a Palindrome'

for (let i = 0; i < len/2; i++) {
  
  if (string[i] != string[len -1 -i] ){
    msg = ' is not a Palindrome'
  }
}
console.log(`${string}: ${msg}`);
