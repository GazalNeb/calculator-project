
//get the button and input values from html

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const cancelButton = document.querySelector(".cancel");
const changeSignButton = document.querySelector(".change-sign");
const equalButton = document.querySelector(".equal");
const input = document.querySelector("input");

//declare empty variables to save numbers and operators globally, as functions will require work on them
let operator = "";
let valueA = "";
let valueB = "";

//functions to handle button clicks of different types
const handleCancel = (e) => {
  operator = "";
  valueA = "";
  valueB = "";
  input.value = "";
}

const setFinalValues = (newValue) => {
    valueA =  newValue;
    valueB = "";  
    operator = "";
}
const handleEqual = (e) => {
  console.log(valueA, valueB, operator, "inputEqual");
  if (operator == "" && valueB == "") {
    return; //this will ensure that valueA and valueB don't change to float and affect the flow of next clicks
  }
  console.log(valueA, valueB, operator, "outputEqualA");
  valueA = parseFloat(valueA); 
  valueB = parseFloat(valueB);
  if (operator == "+") {
    input.value = valueA + valueB;
    setFinalValues(input.value);

  } else if (operator == "-") {
    input.value = valueA - valueB;
    setFinalValues(input.value);

  } else if (operator == "*") {
    input.value = valueA * valueB;
    setFinalValues(input.value);

  } else if (operator == "÷") {
    input.value = valueA/valueB;
    setFinalValues(input.value);

  }
  else if (operator == "%") {
    input.value = valueA/100 * valueB;
    setFinalValues(input.value);
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

const handleDecimal = (e) => {
  if (operator == "" && valueA.includes(".")) {
    return;
   }
  else if (operator.length > 0 && valueB.includes(".")) {
   return;
  }
  else {
    handleNumber(e);
  }
}

const handleOperator = (e) => {
  console.log(valueA, valueB, operator, "inputOperator");
  if (operator == "" && valueA.length > 0)  {
    console.log(valueA, valueB, operator, "OutputA");
  operator = e.target.innerHTML;
  input.value += e.target.innerHTML;
  }
  else if (operator.length > 0) {
    console.log(valueA, valueB, operator, "OutputB");
  handleEqual(); //this will make sure the existing operation is performed before the next operation
  }
  else if (valueA.length == 0) {
    console.log(valueA, valueB, operator, "OutputC");
    input.value = "Please enter a value first"; //this will prevent operator from being passed before valueA
  }
}

const handleChangeSign = (e) => {
  console.log(valueA, "inputA");
  console.log(valueB, "inputB");
  if (valueB.length > 0) {
    valueB = `${-parseFloat(valueB)}`; //this is to ensure that the value is converted back to string after the change of sign for other functions that require it as string.
    input.value = valueA + operator + valueB;
    console.log(valueB, "outputB");
  } else if (valueA.length > 0) {
    valueA = `${-parseFloat(valueA)}`;
    input.value = valueA + operator;
    console.log(valueA, operator, "outputA");
  } 
}



cancelButton.addEventListener("click", handleCancel)

equalButton.addEventListener("click", handleEqual)

numberButtons.forEach(button => {
  button.addEventListener("click", handleNumber)
})
decimalButton.addEventListener("click", handleDecimal)

operatorButtons.forEach(button => {
  button.addEventListener("click", handleOperator)
})

changeSignButton.addEventListener("click", handleChangeSign)




      //Steps performed to write the code above:

      //Make a display-bar that shows the input (when buttons are clicked) and output after functions are performed on the clicked values

      //Every time a button is clicked, the value should be displayed in the display bar

      //Clicking on the operators should perform a function using the values added before (valueA) and after it (valueB)

      //separate the values entered into the inputbox by the operator in between them

      // find a way to store the two values on which a given operator will act (using global variables)

      // generate methods for each type of button. Example method for = , only if we have two values present, otherwise do nothing. For C, clear input.value.



      //BUGS(and FIXES): DOESN'T PERFORM MULTIPLE OPERATIONS.If we click multiple operators, the operator value is replaced and valueB is added to. (FIXED: If there is a new operator, the earlier operation is performed. An if statement in handleOperator calls on the handleEqual function if an operator is clicked when operator variable already has a value)

      //If the operator is typed before valueA, NaN is displayed (FIXED: not allow the operators to be entered before valueA in handleOperator)

      //decimal numbers are not working as decimals (FIXED: change parseInt to parseFloat, as parseInt returns a whole number)

      //If decimal is pressed when another decimal exist, it's still adding that to the number (FIXED: Create separate button class for decimal than number, and make handleDecimal function. Add an if statement to check for existing decimal value in valueA and valueB. If valueA/valueB includes decimal, then return, else proceed with handleNumber.)

      //If equal is pressed after valueA or after valueA + operator, the operators pressed after that are not adding up in the input value (debugged: It is because the handleEqual function is converting valueA and ValueB from string to float, and then converting them back to string within the if statements. But if equal is pressed when the operator is empty, none of the if statements are run and the float values don't get changed back to string.) 
      //(FIXED: add an if statement in the beginning for cases where operator or valueB is empty and return from the function).

      //If operator is pressed after changeSign, it was not being added to the display-bar (debugged: this was because changeSign function was changing the sign on string values, which was causing value.length to be undefined in handleOperator. 
      //(FIXED: by converting valueA and valueB to float, and then back to string, in changeSign function.)


   
