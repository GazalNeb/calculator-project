//Make a display-bar that shows the input (when buttons are clicked) and output after functions are performed on the clicked/selected values

//Every time a button is clicked, the value should be displayed in the display bar

//Clicking on the operators should perform a function using the values clicked before and after it

//Small-Steps:
//get the button values from html

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

      // method for = ,we have two values present otherwise do nothing

      const operation = () => {

        if (operator == "+") {
          console.log("return");
          input.value = parseInt(valueA) + parseInt(valueB);
        } else if (operator == "-") {
          input.value = parseInt(valueA) - parseInt(valueB);
        } else if (operator == "*") {
          input.value = parseInt(valueA) * parseInt(valueB);
        } else if (operator == "÷") {
          input.value = parseInt(valueA) / parseInt(valueB);
        }
        else if (operator == "%") {
          input.value = (parseInt(valueA)/100) * parseInt(valueB);
        }
      };


      //separate the values entered into the inputbox by the operator in between them
      // find a way to store the two values on which a given operator will act
    })
