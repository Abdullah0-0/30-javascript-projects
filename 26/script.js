//find sum of natural numbers using recursion 



function sum(num) {
  if (num>0) {
    return num +sum(num -1);

  }else{
    return num;
  }
}
let res = sum(5);
console.log(res);

