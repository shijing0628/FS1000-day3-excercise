let inputInfo = prompt("Please Input puppy's age:");

function calculateDogAge(age) {
  let dogAge = age * 7;
  document.write(`Your doggie is ${dogAge} years old in dog years!`);
}
calculateDogAge(inputInfo);
