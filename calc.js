//Define Structure
var operator = function (op, next) {
  this.id = randomId();
  this.op = op;
  this.next = next;
};

var numbers = function (num, op) {
  this.num = num;
  this.op = op;
};

var headOp = new operator(null, null);
var nums = [];
//Define methods
function randomId() {
  return Math.random().toString(36).substring(2, 10);
}

function addNum(num, op) {
  nums.push(new numbers(num, op));
}

function OpType(operator) {
  let op = operator.op;
  switch (op) {
    case "+":
      addLastOp(op);
      break;
    case "-":
      addLastOp(op);
      break;
    case "*":
      addFirstOp(op);
      break;
    case "/":
      addFirstOp(op);
      break;
    case "(":
      addFirstOp(op);
      break;
    case ")":
      addFirstOp(op);
      break;
    default:
      break;
  }
}

function addLastOp(op) {
  let tmp = headOp;
  if (headOp.op == null) {
    headOp.op = op;
    return headOp;
  } else {
    while (tmp.next != null) {
      tmp = tmp.next;
    }

    tmp.next = new operator(op, null);
    return tmp.next;
  }
}
function addFirstOp(op) {
  if (headOp.op == null) {
    headOp.op = op;
    return headOp;
  } else {
    let newOp = new operator(op, headOp);
    headOp = newOp;
    return headOp;
  }
}

function removeLastOp() {
  if (headOp.op == null) return false;
  let tmp = headOp;
  if (tmp.next == null) {
    headOp.op = null;
    return true;
  } else {
    while (tmp.next.next != null) {
      tmp = tmp.next;
    }
    tmp.next = null;
    return true;
  }
}

function printOp() {
  let tmp = headOp;
  while (tmp != null) {
    console.log(tmp.op);
    tmp = tmp.next;
  }
}

function sizeOp() {
  let tmp = headOp;
  let size = 0;
  if (tmp.op == null) return size;
  while (tmp != null) {
    size++;
    tmp = tmp.next;
  }
  return size;
}

function calc() {
  let tmp = headOp;
  let num = 0;
  while (tmp != null) {
    switch (tmp.op) {
      case "+":
        num += nums.pop().num;
        break;
      case "-":
        num -= nums.pop().num;
        break;
      case "*":
        num *= nums.pop().num;
        break;
      case "/":
        num /= nums.pop().num;
        break;
      default:
        break;
    }
    tmp = tmp.next;
  }
  return num;
}

//2+3*7-4/2 = 23
addNum(2 + 3);
