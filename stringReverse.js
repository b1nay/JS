let word = prompt("Enter a string  :");
// let length = word.length;
let reverse = [];
for (i = word.length - 1; i >= 0; i--) {
  reverse = reverse + word[i];
}
alert(`Reverse of ${word} is ${reverse}.`);
