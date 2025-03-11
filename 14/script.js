//Find the Factorial of a Number Using Recursion


let num = 5;
let fact = 1;

function factorial(n) {
    if (n>num) {
      return
    }
    fact = fact * n;
    n++
  factorial(n)
}

factorial(1)
console.log(fact);
