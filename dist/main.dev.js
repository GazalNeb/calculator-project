"use strict";

//Make a display-bar that shows the input (when buttons are clicked) and output after functions are performed on the clicked/selected values
//Every time a button is clicked, the value should be displayed in the display bar
//Clicking on the operators should perform a function using the values clicked before and after it
//Small-Steps:
//get the button and input values from html
console.log("hello");
var numberButtons = document.querySelectorAll(".number");
var operatorButtons = document.querySelectorAll(".operator");
var cancelButton = document.querySelector(".cancel");
var changeSignButton = document.querySelector(".change-sign");
var equalButton = document.querySelector(".equal");
var input = document.querySelector("input"); //declare empty variables where you will be saving numbers and operators here, as methods for operators will require work on them

var operator = "";
var valueA = "";
var valueB = "";

var handleCancel = function handleCancel(e) {
  operator = "";
  valueA = "";
  valueB = "";
  input.value = "";
};

var setFinalValues = function setFinalValues(newValue) {
  valueA = newValue;
  valueB = "";
  operator = "";
};

var handleEqual = function handleEqual(e) {
  console.log("equal");

  if (operator == "" || valueB == "") {
    return;
  }

  valueA = parseFloat(valueA);
  valueB = parseFloat(valueB);

  if (operator == "+") {
    console.log("return");
    input.value = valueA + valueB;
    setFinalValues(input.value);
  } else if (operator == "-") {
    input.value = valueA - valueB;
    setFinalValues(input.value);
  } else if (operator == "*") {
    input.value = valueA * valueB;
    setFinalValues(input.value);
  } else if (operator == "÷") {
    input.value = valueA / valueB;
    setFinalValues(input.value);
  } else if (operator == "%") {
    input.value = valueA / 100 * valueB;
    setFinalValues(input.value);
  } // valueA = valueA.toString();
  // valueB = valueB.toString();

};

var handleNumber = function handleNumber(e) {
  if (operator.length > 0) {
    valueB += e.target.innerHTML;
    input.value = valueA + operator + valueB;
  } else {
    valueA += e.target.innerHTML;
    input.value = valueA;
  }
};

var handleOperator = function handleOperator(e) {
  console.log(valueA);
  console.log(operator);

  if (operator == "" && valueA.length > 0) {
    console.log("if 1");
    operator = e.target.innerHTML;
    input.value += e.target.innerHTML;
    console.log(operator, input.value);
  } else if (operator.length > 0) {
    handleEqual(); //this will make sure the existing operation is performed before the next operation
  } else if (valueA.length == 0) {
    input.value = "Please enter a value first"; //this will prevent operator from being passed before valueA
  }
};

var handleChangeSign = function handleChangeSign(e) {
  if (valueB.length > 0) {
    valueB = -valueB;
    input.value = valueA + operator + valueB;
  } else if (valueA.length > 0) {
    valueA = -valueA;
    input.value = valueA + operator;
  }
};

cancelButton.addEventListener("click", handleCancel);
equalButton.addEventListener("click", handleEqual);
numberButtons.forEach(function (button) {
  button.addEventListener("click", handleNumber);
});
operatorButtons.forEach(function (button) {
  button.addEventListener("click", handleOperator);
});
changeSignButton.addEventListener("click", handleChangeSign); //separate the values entered into the inputbox by the operator in between them
// find a way to store the two values on which a given operator will act 
// method for = , if we have two values present otherwise do nothing
//Problems: DOESN'T PERFORM MULTIPLE OPERATIONS.If we click multiple operators, the operator value is replaced and valueB is added to. (FIXED: If there is a new operator, make sure the earlier operation is performed)
// If the operator is typed before valueA, NaN is displayed (FIXED: not allow the operators to be entered before valueA or just let NaN be displayed)
//decimal numbers are not working as decimals (FIXED: change parseInt to parseFloat, as it returns a whole number)
//If decimal is pressed when another decimal exist, it's still adding that to the number (Potential fix: add an if statement to check for decimal value in valueA and valueB)