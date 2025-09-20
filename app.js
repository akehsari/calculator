const display = document.querySelector(".display");
const number = document.querySelectorAll(".number");
const operater = document.querySelectorAll(".operater");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const clear = document.querySelector(".clear");
const percentage = document.querySelector(".percentage");
const dot = document.querySelector(".dot");

let num1 = 0;
let num2 = 0;
let calc = " ";
let res = 0;
let count = 0;

number.forEach((item) => {
  item.addEventListener("click", () => {
    count = 0;
    display.innerHTML += item.innerHTML;
  });
});

operater.forEach((item) => {
  item.addEventListener("click", () => {
    count = 0;
    num1 = Number(display.innerHTML);
    calc = item.innerHTML;
    display.innerHTML = "";
    console.log(num1, calc);
  });
});

equal.addEventListener("click", () => {
  num2 = Number(display.innerHTML);
  count = 0;
  if (calc === "+") {
    res = num1 + num2;
    display.innerHTML = res;
    num1 = res;
    num2 = 0;
  } else if (calc === "-") {
    res = num1 - num2;
    display.innerHTML = res;
    num1 = res;
    num2 = 0;
  } else if (calc === "*") {
    res = num1 * num2;
    display.innerHTML = res;
    num1 = res;
    num2 = 0;
  } else if (calc === "/") {
    res = num1 / num2;
    display.innerHTML = res;
    num1 = res;
    num2 = 0;
  }
});

ac.addEventListener("click", () => {
  display.innerHTML = "";
  num1 = 0;
  num2 = 0;
});

clear.addEventListener("click", () => {
  if (
    display.innerHTML == "NaN" ||
    display.innerHTML == "Infinity" ||
    display.innerHTML == "-Infinity"
  ) {
    display.innerHTML = "";
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
});

percentage.addEventListener("click", () => {
  display.innerHTML = display.innerHTML / 100;
});

dot.addEventListener("click", () => {
  if (count === 0) {
    display.innerHTML += dot.innerHTML;
    count++
  }
});
