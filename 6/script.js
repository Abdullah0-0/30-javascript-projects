//+++++++Convert Kilometres to Miles+++++++++


function conversion() {
  let km_value = Number(document.getElementById("kmtomile").value);
  let kmtoMiles = (0.62137*km_value)
  document.getElementById("heading").textContent = `The value in Miles is ${kmtoMiles}`;

}