var calc = document.querySelector(".calc");
var result = document.querySelector(".result");
var clear = document.querySelector("#clear");
var backspace = document.querySelector("#backspace");
var divide = document.querySelector("#divide");
var multiply = document.querySelector("#multiply");
var subtract = document.querySelector("#subtract");
var add = document.querySelector("#add");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var zero = document.querySelector("#zero");
var dot = document.querySelector("#dot");
var equal = document.querySelector("#equal");

clear.addEventListener("click", () => {
  calc.textContent = "";
  result.textContent = "";
});

backspace.addEventListener("click", () => {
  calc.textContent = calc.textContent.slice(0, -1);
  result.textContent = "";
});

divide.addEventListener("click", () => {
  if (
    calc.textContent[calc.textContent.length - 1] === "-" ||
    calc.textContent[calc.textContent.length - 1] === "*" ||
    calc.textContent[calc.textContent.length - 1] === "+"
  ) {
    calc.textContent = calc.textContent.slice(0, -1);
  }
  if (calc.textContent[calc.textContent.length - 1] != "/") {
    calc.textContent += "/";
  }
});

multiply.addEventListener("click", () => {
  if (
    calc.textContent[calc.textContent.length - 1] === "-" ||
    calc.textContent[calc.textContent.length - 1] === "+" ||
    calc.textContent[calc.textContent.length - 1] === "/"
  ) {
    calc.textContent = calc.textContent.slice(0, -1);
  }
  if (calc.textContent[calc.textContent.length - 1] != "*") {
    calc.textContent += "*";
  }
});

subtract.addEventListener("click", () => {
  if (
    calc.textContent[calc.textContent.length - 1] === "+" ||
    calc.textContent[calc.textContent.length - 1] === "*" ||
    calc.textContent[calc.textContent.length - 1] === "/"
  ) {
    calc.textContent = calc.textContent.slice(0, -1);
  }
  if (calc.textContent[calc.textContent.length - 1] != "-") {
    calc.textContent += "-";
  }
});

add.addEventListener("click", () => {
  if (
    calc.textContent[calc.textContent.length - 1] === "-" ||
    calc.textContent[calc.textContent.length - 1] === "*" ||
    calc.textContent[calc.textContent.length - 1] === "/"
  ) {
    calc.textContent = calc.textContent.slice(0, -1);
  }
  if (calc.textContent[calc.textContent.length - 1] != "+") {
    calc.textContent += "+";
  }
});

seven.addEventListener("click", () => {
  calc.textContent += "7";
});

eight.addEventListener("click", () => {
  calc.textContent += "8";
});

nine.addEventListener("click", () => {
  calc.textContent += "9";
});

four.addEventListener("click", () => {
  calc.textContent += "4";
});

five.addEventListener("click", () => {
  calc.textContent += "5";
});

six.addEventListener("click", () => {
  calc.textContent += "6";
});

one.addEventListener("click", () => {
  calc.textContent += "1";
});

two.addEventListener("click", () => {
  calc.textContent += "2";
});

three.addEventListener("click", () => {
  calc.textContent += "3";
});

zero.addEventListener("click", () => {
  calc.textContent += "0";
});

dot.addEventListener("click", () => {
  if (calc.textContent[calc.textContent.length - 1] != ".") {
    calc.textContent += ".";
  }
});

equal.addEventListener("click", () => {
  var input = calc.textContent;
  if (input != "") {
    calc.textContent = eval(input);
    result.textContent = eval(input);
  } else {
    result.textContent = "Error";
  }
});
