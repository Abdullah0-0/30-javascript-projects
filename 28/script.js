//make a simple calculator using switch case

let num1 = prompt('Enter first Number')
let num2 = prompt('Enter second Numner')
let opr = prompt('Select oprator');

switch (opr) 
{

  case '+':
      let res = parseFloat(num1) + parseFloat(num2);
      console.log(`${num1} + ${num2} = ${res}`);
      break;
  case '-':
      let res1 = parseFloat(num1) - parseFloat(num2);
      console.log(`${num1} - ${num2} = ${res1}`);
      break;
  case 'x':
      let res2 = parseFloat(num1) * parseFloat(num2);
      console.log(`${num1} x ${num2} = ${res2}`);
      break;
  case '/':
      let res3 = parseFloat(num1) / parseFloat(num2);
      console.log(`${num1} / ${num2} = ${res3}`);
      break;
  default:
      console.log('Invalid operator');
}