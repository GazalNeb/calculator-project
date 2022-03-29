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
      operator = "";
      valueA = "";
      valueB = "";
      // console.log("hello");
      input.value = "";
      return;
    } 
    else if (displayValue == "=") {
      
    }

    input.value += displayValue; //this will add value of each button to the display-bar one after the other     
})


// method for = ,we have two values present otherwise do nothing

})



//separate the values entered into the inputbox by the operator in between them
// find a way to store the two values on which a given operator will act 