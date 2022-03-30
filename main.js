//Make a display-bar that shows the input (when buttons are clicked) and output after functions are performed on the clicked/selected values

//Every time a button is clicked, the value should be displayed in the display bar

//Clicking on the operators should perform a function using the values clicked before and after it

//Small-Steps:
//get the button and input values from html

const buttons = document.querySelectorAll("button");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const cancelButton = document.querySelectorAll(".cancel");
const changeSignButton = document.querySelectorAll(".change-sign");
const equalButton = document.querySelectorAll(".equal");
const input = document.querySelector("input");

//declare empty variables where you will be saving numbers and operators here, as methods for operators will require work on them
let operator = "";
let valueA = "";
let valueB = "";

const handleCancel = (e) => {
  operator = "";
  valueA = "";
  valueB = "";
  input.value = "";
}

const handleEqual = (e) => {
  valueA = parseFloat(valueA); 
  valueB = parseFloat(valueB);
  if (operator == "+") {
    console.log("return");
    input.value = valueA + valueB;
    valueA =  input.value;
    valueB = "";  
    operator = ""; 
  } else if (operator == "-") {
    input.value = valueA - valueB;
    valueA =  input.value;
    valueB = "";
    operator = "";
  } else if (operator == "*") {
    input.value = valueA * valueB;
    valueA =  input.value;
    valueB = "";
    operator = "";
  } else if (operator == "÷") {
    input.value = valueA/valueB;
    valueA =  input.value;
    valueB = "";
    operator = "";
  }
  else if (operator == "%") {
    input.value = valueA/100 * valueB;
    valueA =  input.value;
    valueB = "";
    operator = "";
  }
}

const handleNumber = (e) => {
  if (operator.length > 0) {
    valueB += e.target.innerHTML;
    input.value = valueA + operator + valueB;
  } else {
    valueA += e.target.innerHTML;
    input.value = valueA;
  }
}

const handleOperator = (e) => {
  operator = e.target.innerHTML;
  input.value += e.target.innerHTML;
}

const handleChangeSign = (e) => {
  if (valueB.length > 0) {
    valueB = -valueB;
    input.value = valueA + operator + valueB;

  } else if (valueA.length > 0) {
    valueA = -valueA;
    input.value = valueA + operator;
  } 
}

cancelButton.forEach(button => {
  button.addEventListener("click", (event) => handleCancel(event))
})

equalButton.forEach(button => {
  button.addEventListener("click", (event) => handleEqual(event))
})

numberButtons.forEach(button => {
  button.addEventListener("click", (event) => handleNumber(event))
})

operatorButtons.forEach(button => {
  button.addEventListener("click", (event) => handleOperator(event))
})

changeSignButton.forEach(button => {
  button.addEventListener("click", (event) => handleChangeSign(event))
})



      //separate the values entered into the inputbox by the operator in between them
      // find a way to store the two values on which a given operator will act 
      // method for = , we have two values present otherwise do nothing

      //Problems: DOESN'T PERFORM MULTIPLE OPERATIONS.If we click multiple operators, the operator value is replaced and valueB is added to. (Potential fix: If there is a new operator, make sure the earlier operation is performed)
      // If the operator is typed before valueA, NaN is displayed (potential fix: not allow the operators to be entered before valueA or just let NaN be displayed)
      //decimal numbers are not working as decimals (potential fix: change parseInt to parseFloat, as it returns a whole number)
   
