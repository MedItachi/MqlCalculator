let opMinPeriority = [];
let numbers = [];
let tmpOp = null;
let alow_calc = false;

function addNum(num) {
  if (alow_calc) {
    console.log("calcNum");
    alow_calc = false;
    calcNum(num);
  } else {
    numbers.push(num);
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

function calcNum(nb2) {
  let nb1 = numbers[numbers.length - 1];
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
  let num = 0;
  if (opMinPeriority.length > 0) {
    for (let i = 0; i < opMinPeriority.length; i++) {
      switch (opMinPeriority[i]) {
        case "+":
          num = numbers[0] + numbers[1];
          //! pay attention here mybe i+1
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
    //!! pay attention here
    return numbers.shift();
  } else if (numbers.length > 0) {
    return numbers.shift();
  }
  return 0;
}

//12*10-3*5*10+ = -30
//12+15+10*13 = 157
addNum(12);
readOperator("+");
addNum(15);
readOperator("+");
addNum(10);
readOperator("*");
addNum(13);
console.log(calc());
