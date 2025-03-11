//+++++++  Convert Celsius to Fahrenheit   +++++++++


function conversion() {
  let cel_value = Number(document.getElementById("celtofahren").value);
  let celto_fahren = (cel_value*(9/5)+32)
  document.getElementById("heading").textContent = `The value in Fahrenheit is ${celto_fahren}`;

}