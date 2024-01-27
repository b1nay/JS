let n = prompt("Enter a number :");
alert(`Factorial of ${n} is ${fact(n)}`);
function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
}
