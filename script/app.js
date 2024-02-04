leapCheck = () => {
  const year = document.getElementById("year").value;
  const output = document.getElementById("output");
  const ln = year.length;

  if (ln == 4) {
    if (year % 4 == 0) {
      document.getElementById("output").innerHTML = "Leap";
      output.classList.remove("output2");
      output.classList.add("output1");
    } else {
      document.getElementById("output").innerHTML = "Not Leap";
      output.classList.add("output2");
    }
  } else {
    alert(year + " is Invalid Year");
  }
};
