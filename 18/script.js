//Check Palindrome using array Methods

let string = prompt("Enter a string")
let stringArray = string.split('')
let stringArrayRev = stringArray.reverse()
let revString = stringArrayRev.join('')

if (string === revString) {
  console.log(`${string}: is Palindrome `);
  
} else {
  console.log(`${string}: is not Palindrome `);
}