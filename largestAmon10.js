let number = [10];
for (let i = 0; i <= 9; i++) {
  number[i] = prompt(`Enter number ${i + 1} :`);
}
let largest = number[0];
for (let i = 0; i <= 9; i++) {
  if (largest < number[i]) {
    largest = number[i];
  }
}
alert(`Largest number is ${largest}`);
