let count = 0;
let n1 = prompt("Enter a Positive number :");
for (i = 2; i < n1 - 1; i++) {
  if (n1 % i == 0) count++;
}
if (count == 0) {
  prompt(`${n1} is prime `);
} else {
  prompt(`${n1} is composite `);
}
