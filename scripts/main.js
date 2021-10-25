class Calculator {
  constructor(number) {
    this.displayedNumber = number;
    this.operation = "";
    this.currentOperand = "";
    this.previousOperand = "";
  }

  appendNumber(key) {
    if (key === "." && this.displayedNumber.includes(".")) return;

    this.displayedNumber = currentOperand.innerText + key;
    this.updateDisplay();
  }

  delete() {
    this.displayedNumber = this.displayedNumber.toString().slice(0, -1);

    this.updateDisplay();
  }

  clear() {
    this.operation = "";
    this.currentOperand = 0;
    this.previousOperand = 0;
    this.displayedNumber = "";

    this.updateDisplay();
  }

  setOperation(operation) {
    const conditions = ["-", "+", "/", "x"];

    console.log(this.displayedNumber);

    if (conditions.some((c) => this.displayedNumber.toString().includes(c))) {
      if (this.previousOperand !== 0) {
        this.currentOperand = this.displayedNumber.slice(
          this.previousOperand.toString().length + 1
        );
        this.calculate();
        this.previousOperand = 0;
      }
    }

    this.operation = operation;
    this.previousOperand = this.displayedNumber;
    this.displayedNumber = this.displayedNumber + operation;

    console.log(this.displayedNumber);
    this.updateDisplay();
  }

  calculate() {
    switch (this.operation) {
      case "+":
        this.displayedNumber =
          parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
        break;
      case "-":
        this.displayedNumber =
          parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        break;
      case "/":
        this.displayedNumber =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        break;
      case "x":
        this.displayedNumber =
          parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
        break;
      default:
        break;
    }

    this.updateDisplay();
  }

  updateDisplay() {
    currentOperand.innerText = this.displayedNumber;
  }
}

const numberButttons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const delButton = document.querySelector("[data-delete]");
const resetButtton = document.querySelector("[data-reset]");
const equalsButton = document.querySelector("[data-equals");
const currentOperand = document.querySelector("[data-current]");

const calculator = new Calculator(currentOperand);

numberButttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
  });
});

resetButtton.addEventListener("click", () => {
  calculator.clear();
});

delButton.addEventListener("click", () => {
  calculator.delete();
});

operationButtons.forEach((operation) => {
  operation.addEventListener("click", () => {
    calculator.setOperation(operation.innerText);
  });
});

equalsButton.addEventListener("click", () => {
  calculator.setOperation("");
});

//Toggle theme
const toggle = document.querySelector(".toggle");
const toggleSelector = document.querySelector(".toggle-selector");

toggle.addEventListener("click", function () {
  if (toggleSelector.classList.contains("toggle-selector-theme2")) {
    toggleSelector.classList.add("toggle-selector-theme3");
    toggleSelector.classList.remove("toggle-selector-theme2");

    document.documentElement.setAttribute("theme", "03");
  } else if (toggleSelector.classList.contains("toggle-selector-theme3")) {
    toggleSelector.classList.remove("toggle-selector-theme3");
    document.documentElement.setAttribute("theme", "01");
  } else {
    toggleSelector.classList.toggle("toggle-selector-theme2");
    document.documentElement.setAttribute("theme", "02");
  }
});
