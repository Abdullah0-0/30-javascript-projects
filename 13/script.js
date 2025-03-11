let num = 5

let fct = 1
if (num === 0) {
  console.log(`Factorial for ${num} is 1`);
  
} else if (num < 0) {
  console.log('Factorial does not exsist'); 
}else{
  for (let i = 1; i <= num ; i++) {
    fct = fct*i
  }
  console.log(`The factorial of ${num} is ${fct}`)
}