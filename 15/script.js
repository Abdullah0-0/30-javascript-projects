// print the table of any user defined number using function

let userInput = Number(prompt('Enter the Number to find its Table.'));

for (let i = 1; i <= 10; i++) {
  let tab = i * userInput
  console.log(`${userInput} x ${i} = ${tab} `);
  
}