// Check Prime Number      

// Check Prime Number      

const number = parseInt(prompt("Enter a number"), 10);

if (number === 1) {
  console.log(`${number} is neither prime nor composite`);
} else if (number <= 0) {
  console.log(`${number} is not a prime number`);
} else if (number === 2) {
  console.log(`${number} is a prime number`);
} else {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;  // Exit loop once a divisor is found
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is not a prime number`);
  }
}

