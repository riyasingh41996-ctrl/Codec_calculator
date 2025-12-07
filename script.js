let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function chooseOperator(op) {
  if (currentInput === "") return;
  firstOperand = currentInput;
  operator = op;
  currentInput = "";
}

function calculate() {
  if (firstOperand === "" || currentInput === "") return;
  let result;
  const a = parseFloat(firstOperand);
  const b = parseFloat(currentInput);

  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = b !== 0 ? a / b : "Error"; break;
    default: return;
  }

  display.value = result;
  currentInput = result.toString();
  operator = "";
}

function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  display.value = "";
}