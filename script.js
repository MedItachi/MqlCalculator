document.addEventListener("keydown", function (event) {
  if ((event.key >= 0 && event.key <= 9) || isOperator(event.key)) {
    addToScreen(event.key);
  } //Check if is backspace
  else if (event.key == "Backspace") {
    addToScreen(event.key);
  }
});

function printScreen(key) {
  if (key == "(") {
    document.getElementById("operation").innerHTML += key + ")";
    addToScreen(key + "+");
  } else {
    addToScreen(key);
  }
}

function calculate() {
  let operation = document.getElementById("operation").innerHTML;
  //eval() is a function that evaluates a string as a JavaScript expression
  document.getElementById("result").innerHTML = eval(operation);
}

function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

function addToScreen(value) {
  let lastelment = document.getElementById("operation").innerHTML.slice(-1);
  //check if last element is a empty string
  if (lastelment == "") {
    if (!isOperator(value)) {
      document.getElementById("operation").innerHTML += value;
    }
  } else if (value == "Backspace") {
    document.getElementById("operation").innerHTML = document
      .getElementById("operation")
      .innerHTML.slice(0, -1);
  } else {
    document.getElementById("operation").innerHTML += value;
  }
}
