let opMinPeriority = [];
let numbers = [];
let tmpOp = null;
let alow_calc = false;

let operaion_user = "";

function addtoScreen(value) {
  operaion_user += value;
  if (document.getElementById("operation").getAttribute("value") == "empty") {
    document.getElementById("operation").setAttribute("value", "not_empty");
    document.getElementById("operation").innerHTML = "";
  }
  document.getElementById("operation").innerHTML += value;
}

function addNum(num) {
  if (alow_calc) {
    alow_calc = false;
    calctwoNum(parseFloat(num));
  } else {
    numbers.push(parseFloat(num));
  }
}
function adopMinPeriority(op) {
  opMinPeriority.push(op);
}

function readOperator(op) {
  switch (op) {
    case "+":
      adopMinPeriority(op);
      break;
    case "-":
      adopMinPeriority(op);
      break;
    case "*":
      alow_calc = true;
      tmpOp = "*";
      break;
    case "/":
      alow_calc = true;
      tmpOp = "/";
      break;
    default:
      break;
  }
}

function calctwoNum(nb2) {
  let nb1 = numbers[numbers.length - 1];
  console.log("nb2*nb1 = ", nb1 * nb2);
  switch (tmpOp) {
    case "*":
      numbers[numbers.length - 1] = nb1 * nb2;
      break;
    case "/":
      numbers[numbers.length - 1] = nb1 / nb2;
      break;
    default:
      break;
  }
  tmpOp = null;
}

function calc() {
  string_to_array(operaion_user);
  let num = 0;
  if (opMinPeriority.length > 0) {
    for (let i = 0; i < opMinPeriority.length; i++) {
      switch (opMinPeriority[i]) {
        case "+":
          num = numbers[0] + numbers[1];
          numbers[0] = num;
          numbers.splice(1, 1);
          break;
        case "-":
          num = numbers[0] - numbers[1];
          numbers[0] = num;
          numbers.splice(+1, 1);

          break;
        default:
          break;
      }
    }
    clear();
    document.getElementById("result").innerHTML = num;
    //!! pay attention here
    return numbers.shift();
  } else {
    document.getElementById("result").innerHTML = numbers[0];
  }
}

function clear() {
  numbers = [];
  opMinPeriority = [];
  tmpOp = null;
  alow_calc = false;
  operaion_user = "";
}

function is_Operator(value) {
  if (value == "+" || value == "-" || value == "*" || value == "/") {
    return true;
  }
  return false;
}

function string_to_array(str) {
  let concat_number = "";

  for (let i = 0; i < str.length; i++) {
    if (is_Operator(str[i])) {
      addNum(parseFloat(concat_number));
      readOperator(str[i]);
      console.log("concat_number", concat_number);
      console.log("operator", str[i]);
      concat_number = "";
    } else if (i == str.length - 1) {
      concat_number += str[i];
      addNum(parseFloat(concat_number));
      console.log("concat_number", concat_number);
    } else {
      concat_number += str[i];
    }
  }
}

function clear_screen() {
  document.getElementById("operation").innerHTML = "0";
  document.getElementById("result").innerHTML = "0";
  document.getElementById("operation").setAttribute("value", "empty");
  clear();
}

function backspace() {
  console.log("backspace");
  let str = document.getElementById("operation").innerHTML;
  let new_str = str.substring(0, str.length - 1);
  document.getElementById("operation").innerHTML = new_str;
  operaion_user = new_str;
}
