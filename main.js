//Make a display-bar that shows the input (when buttons are clicked) and output after functions are performed on the clicked/selected values

//Every time a button is clicked, the value should be displayed in the display bar

//Clicking on the operators should perform a function using the values clicked before and after it

//Small-Steps:
//get the button and input values from html

const buttons = document.querySelectorAll("button");
// const numbers = document.getElementsByClassName("number");
console.log(buttons);
console.log(buttons[0].innerHTML);
// console.log(numbers);

const input = document.querySelector("input");

// buttons[3].addEventListener("click", (event) => {
//   input.value= buttons[3].innerHTML;
// });

//declare empty variables where you will be saving numbers and operators here, as methods for operators will require work on them
let operator = "";
let valueA = "";
let valueB = "";

buttons.forEach(button => {
      button.addEventListener("click", (event) => {
        // console.log(event);
        let displayValue = event.target.innerHTML;
        // two if statements, one checking for '=' one for 'C' first
        //if statments checking for operators and functions to be performed on them
        // store operators and numbers in variables                                       
        // if else statements to check the value of displayValue
        if (displayValue == "C") {
          console.log("if 1");
          operator = "";
          valueA = "";
          valueB = "";
          input.value = "";

        } else if (displayValue == "=") {
          console.log("if 2");
          operation();

        } else if (displayValue == "+" || displayValue == "-" || displayValue == "*" || displayValue == "÷" || displayValue == "%") {
          console.log("if 3");
          operator = displayValue;
          input.value += displayValue;

        } else if (displayValue == "+/-") {
          console.log("if 4");
          if (valueB.length > 0) {
            valueB = -valueB;
            input.value = valueA + operator + valueB;

          } else if (valueA.length > 0) {
            valueA = -valueA;
            input.value = valueA + operator;
          }

        } else {
          console.log("if 5");
          if (operator.length > 0) {
            valueB += displayValue;
            input.value = valueA + operator + valueB;
          } else {
            valueA += displayValue;
            input.value = valueA;
          }
        }
        // input.value += displayValue; //this will add value of each button to the display-bar one after the other     
      })

      const operation = () => {

        if (operator == "+") {
          console.log("return");
          input.value = parseFloat(valueA) + parseFloat(valueB);
          valueA =  input.value;
          valueB = "";  //this will make sure the value of operator and valueB is empty string for the next calculation
          operator = ""; 
        } else if (operator == "-") {
          input.value = parseFloat(valueA) - parseFloat(valueB);
          valueA =  input.value;
          valueB = "";
          operator = "";
        } else if (operator == "*") {
          input.value = parseFloat(valueA) * parseFloat(valueB);
          valueA =  input.value;
          valueB = "";
          operator = "";
        } else if (operator == "÷") {
          input.value = parseFloat(valueA) / parseFloat(valueB);
          valueA =  input.value;
          valueB = "";
          operator = "";
        }
        else if (operator == "%") {
          input.value = (parseFloat(valueA)/100) * parseFloat(valueB);
          valueA =  input.value;
          valueB = "";
          operator = "";
        }
      };


      //separate the values entered into the inputbox by the operator in between them
      // find a way to store the two values on which a given operator will act 
      // method for = , we have two values present otherwise do nothing

      //Problems: If we click multiple operators, the operator value is replaced and valueB is added to. 
      // If the operator is typed before valueA, NaN is displayed (potential fix: not allow the operators to be entered before valueA or just NaN be displayed)
      //decimal numbers are not working as decimals (potential fix: change parseInt, as it returns a whole number)
    })
