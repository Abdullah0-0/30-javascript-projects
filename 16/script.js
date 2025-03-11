//Find Armstrong Number in an Interval

var number = prompt("");
var temp = number;
var sum = 0;

while (temp > 0) {
  var digit = temp%10;
  sum += digit**3;
  temp = parseInt(temp/10)
  
}
if (sum == number) {
  console.log(`${number} is an armstrong number`);
  
}else{
  console.log(`${number} is not an armstrong number`);
}