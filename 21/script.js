//check Whether a String Contains a Substring   

let string = prompt('Please Enter a String');

let testStart = string.startsWith('A');
let testEnd = string.endsWith('e');


if (testStart == true && testEnd == true){
  console.log(`${string} starts with W and ends with e`);
  
}else if (testStart == true && testEnd == false){
  console.log(`${string} starts with W `);
}else if (testStart == false && testEnd == true){
  console.log(`${string} starts with e `);
}else{
  console.log(`${string} neither starts with A nor ends woth e`);
  
}