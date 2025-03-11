// Find the Largest Among Three Numbers 

let a = 2;
let b  = 3;
let c = 4;

console.log(Math.max(a,b,c));

if (a >= b && a >= c) {
  console.log(`${a} is the largest`);
} else if (b >= a &&  b >= c ) {
  console.log(`${b} is the largest`);
}else {
  console.log(`${c} is the largest`);
}
