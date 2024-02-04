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


//Theme Toggle

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const iconToggleMoon = () => {
//   moonIcon.classList.toggle("diplay-none");
//   sunIcon.classList.toggle("display-block");
// };
// const iconToggleSun = () => {
//   moonIcon.classList.toggle("diplay-block");
//   sunIcon.classList.toggle("display-none");
// };

const iconToggle = () => {
  moonIcon.classList.toggle("diplay-none");
  sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme == "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
    moonIcon.classList.add("display-none");

    return;
  }
  sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");

    return;
  }

  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
  // iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});
themeCheck();
