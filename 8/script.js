//    Check if a number is Positive, Negative, or Zero 

// let num = prompt("Enter a number to check ");

// if (Math.sign(num) == 1) {
//   console.log(`${num} is a Positive Number`);
  
// } else if (Math.sign(num) == -1) {
//   console.log(`${num} is a Negative Number`);;
  
// }else if (Math.sign(num) == 0 ) {
//   console.log(`${num} is Zero`);
// }else {
//   console.log("Not a Number");
  
// }



function check() {
  let val = document.querySelector("#numCheck").value
  if (val > 0 ) {
    document.getElementById("para").textContent = "The Number is Positive"
  } else if (val < 0 ) {
    document.getElementById("para").textContent = "The Number is Negative"
  }else if (val == 0 ) {
    document.getElementById("para").textContent = "The Number is Zero"
  }else {
    document.getElementById("para").textContent = "Its not a Number"
  }
  
}