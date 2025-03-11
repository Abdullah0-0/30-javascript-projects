 //find Armstrong Numbers between interval 

 let a = prompt('please enter lower number')
 let b = prompt('please enter upper number')

 for (let i = a; i <= b; i++) {
  let temp = i ;
  let noOfDigit = i.toString().length
  let sum = 0;
  while (temp>0 ) {
    let digit = temp&10;
    temp = parseInt(temp/10);
    sum += digit**noOfDigit;

  }
  if (sum == i) {
    console.log(i);
    
  } 
 }