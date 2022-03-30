"use strict";

//Make a display-bar that shows the input (when buttons are clicked) and output after functions are performed on the clicked/selected values
//Every time a button is clicked, the value should be displayed in the display bar
//Clicking on the operators should perform a function using the values clicked before and after it
//Small-Steps:
//get the button and input values from html
var buttons = document.querySelectorAll("button");
var numberButtons = document.querySelectorAll(".number");
var operatorButtons = document.querySelectorAll(".operator");
var cancelButton = document.querySelectorAll(".cancel");
var changeSignButton = document.querySelectorAll(".change-sign");
var equalButton = document.querySelectorAll(".equal");
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

var handleEqual = function handleEqual(e) {
  valueA = parseFloat(valueA);
  valueB = parseFloat(valueB);

  if (operator == "+") {
    console.log("return");
    input.value = valueA + valueB;
    valueA = input.value;
    valueB = "";
    operator = "";
  } else if (operator == "-") {
    input.value = valueA - valueB;
    valueA = input.value;
    valueB = "";
    operator = "";
  } else if (operator == "*") {
    input.value = valueA * valueB;
    valueA = input.value;
    valueB = "";
    operator = "";
  } else if (operator == "÷") {
    input.value = valueA / valueB;
    valueA = input.value;
    valueB = "";
    operator = "";
  } else if (operator == "%") {
    input.value = valueA / 100 * valueB;
    valueA = input.value;
    valueB = "";
    operator = "";
  }
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
  if (operator = "" && valueA.length > 0) {
    operator = e.target.innerHTML;
    input.value += e.target.innerHTML;
  } else if (operator.length > 0) {
    handleEqual();
  } else {
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

cancelButton.forEach(function (button) {
  button.addEventListener("click", function (event) {
    return handleCancel(event);
  });
});
equalButton.forEach(function (button) {
  button.addEventListener("click", function (event) {
    return handleEqual(event);
  });
});
numberButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    return handleNumber(event);
  });
});
operatorButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    return handleOperator(event);
  });
});
changeSignButton.forEach(function (button) {
  button.addEventListener("click", function (event) {
    return handleChangeSign(event);
  });
}); //separate the values entered into the inputbox by the operator in between them
// find a way to store the two values on which a given operator will act 
// method for = , we have two values present otherwise do nothing
//Problems: DOESN'T PERFORM MULTIPLE OPERATIONS.If we click multiple operators, the operator value is replaced and valueB is added to. (Potential fix: If there is a new operator, make sure the earlier operation is performed)
// If the operator is typed before valueA, NaN is displayed (potential fix: not allow the operators to be entered before valueA or just let NaN be displayed)
//decimal numbers are not working as decimals (potential fix: change parseInt to parseFloat, as it returns a whole number)