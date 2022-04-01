
//get the button and input values from html

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const clearAllButton = document.querySelector(".clear-all");
const clearOneButton = document.querySelector(".clear-one");
const changeSignButton = document.querySelector(".change-sign");
const equalButton = document.querySelector(".equal");
const input = document.querySelector("input");

//declare empty variables to save numbers and operator globally, as the functions below will require work on them. valueA is the value added before the operator, and valueB is the value added after the operator.
let operator = "";
let valueA = "";
let valueB = ""; 

//functions to handle button clicks of different types:
const handleClearAll = (e) => {
  operator = "";
  valueA = "";
  valueB = "";
  input.value = ""; //this ensures all variables and input value become empty strings when clear-all button is clicked.
}

const handleClearOne = (e) => {
  if (valueB.length > 0) {
    valueB = valueB.slice(0,-1);
    input.value = valueA + operator + valueB; //this will remove one string from the end of valueB if it exists and display all the updated values.
  }
  else if (operator.length > 0) {
    operator = operator.slice(0,-1);
    input.value = valueA; //this will remove the operator if it exists and display valueA.
  }
  else if (valueA.length > 0) {
    valueA = valueA.slice(0,-1);
    input.value = valueA; //this will remove one string from the end of valueA if it exists and display the updated valueA.
  }
  else {
    return; //this will ensure that the program exits the function when all the variables are empty.
  }
}

const setFinalValues = (newValue) => {
    valueA =  newValue;
    valueB = "";  
    operator = ""; //this sets the final values after different conditions of the handleEqual function, which calls it.
}

const handleEqual = (e) => {
  if (operator == "" || valueB == "") {
    return; //If operator or valueB is empty, then the program returns from the function.This ensures that valueA and valueB don't change to float and affect the flow of next clicks.
  }
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
    valueB += e.target.innerHTML; //if operator exists, then the clicked number is added to valueB
    input.value = valueA + operator + valueB; //this ensures the display-bar(input) shows all the clicked values.
  } else {
    valueA += e.target.innerHTML; //if operator doesn't exist, then the clicked number is added to valueA
    input.value = valueA; //display-bar shows valueA
  }
}

const handleDecimal = (e) => {
  if (operator == "" && valueA.includes(".")) {
    return; //This ensure valueA does not add another decimal point when one already exists.
   }
  else if (operator.length > 0 && valueB.includes(".")) {
   return; //This ensure valueB does not add another decimal point when one already exists.
  }
  else {
    handleNumber(e); //this function is called when either valueA or valueB do not have an existing decimal; the decimal is added to valueA/valueB as any other number would be.
  }
}

const handleOperator = (e) => {
  if (operator == "" && valueA.length > 0)  {
  operator = e.target.innerHTML;
  input.value += e.target.innerHTML; //If operator variable is empty and valueA exists, then the clicked operator is added to the operator variable and the input value.
  }
  else if (operator.length > 0) {
  handleEqual(); //this ensures that the existing operation is performed before the next operation.
  }
  else if (valueA.length == 0) {
    input.value = "Please enter a value first"; //this will prevent operator from being passed before valueA
  }
}

const handleChangeSign = (e) => {
  if (valueB.length > 0) {
    valueB = `${-parseFloat(valueB)}`; //this is to ensure that the value is converted back to string after the change of sign for other functions that require it as string.
    input.value = valueA + operator + valueB; //If valueB exists, then it's sign will be changed, and display-bar(input) will display updated valueA, operator, and valueB.
    console.log(valueB, "outputB");
  } else if (valueA.length > 0) {
    valueA = `${-parseFloat(valueA)}`;
    input.value = valueA + operator; //If valueA exists, then it's sign will be changed, and display-bar(input) will display updated valueA and operator.
  } 
}

//the following code adds click event listeners to html objects(or array of objects) taken from DOM.
clearAllButton.addEventListener("click", handleClearAll)

clearOneButton.addEventListener("click", handleClearOne)

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
      //(FIXED: add an if statement in the beginning of handleEqual function for cases where operator or valueB is empty and return from the function).

      //If operator is pressed after changeSign, it is not being added to the display-bar (debugged: this is because changeSign function is changing the sign on string values, which is causing value.length to be undefined in handleOperator. 
      //(FIXED: convert valueA and valueB to float, and then back to string, in changeSign function.)


   
