//Check if the Numbers Have Same Last Digit   

let a = prompt('{Enter a Number ')
let b = prompt('{Enter a Number ')
let c = prompt('{Enter a Number ')

const res1 = a%10
const res2 = b%10
const res3 = c%10

if (res1 === res2 && res1 === res3) {
  alert(`${a}, ${b}, ${c} are having the same last digit `);
  
}else{
  alert(`${a}, ${b}, ${c} dont have the same last digit `);
}