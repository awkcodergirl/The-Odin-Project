let currentOperator = null;
let operand1 = "";
let operand2 = "";
let finalResult = ""; 
let reset = false;
let input = document.getElementById("input");
let inputHistory = document.getElementById("input-history");

// getting all the buttons
const numberButtons = document.querySelectorAll("#container .digit");
const operatorButtons = document.querySelectorAll("#container .symbol");
const clearButton = document.getElementById("clear-button"); 
const deleteButton = document.getElementById("delete-button");
const equalsButton = document.getElementById("number equals");
const dotButton = document.getElementById("number dot");

// attach Event Listeners to all the number buttons
numberButtons.forEach(function(numberButton){
    numberButton.addEventListener("click", function(e){
        pressNumberButton(e.target.textContent);
    });
});

// attach Event Listeners to all the operator buttons
operatorButtons.forEach(function(operatorButton){
    operatorButton.addEventListener("click", function(e){
        pressOperatorButton(e.target.textContent);
    }); 
});

equalsButton.addEventListener("click", pressEqualsButton);
clearButton.addEventListener("click", pressClearButton);
dotButton.addEventListener("click", pressDotButton);
deleteButton.addEventListener("click", pressDeleteButton);

function pressNumberButton(number){
    if (input.textContent == "0" || reset){
        resetScreen();
    }
    input.textContent += number;
}

function resetScreen(){
    input.textContent = "";
    reset = false; 
}

function pressOperatorButton(operator){
    if (currentOperator != null){
        console.log("current op " + currentOperator);
        pressEqualsButton();
    }

    inputHistory.textContent = `${input.textContent} ${operator}`;
    operand1 = input.textContent;
    currentOperator = operator;
    reset = true;
}

function pressEqualsButton(){
    operand2 = input.textContent;
    // console.log("op1: " + operand1);
    // console.log("op2: " + operand2);
    finalResult = operate(currentOperator, operand1, operand2);
    // console.log("final: " + finalResult);
    inputHistory.textContent = `${operand1} ${currentOperator} ${operand2} =`;
    input.textContent = finalResult;
    currentOperator = null;
}

function pressDotButton(){
    // console.log("dot pressed");

    if (input.textContent.includes('.')){
        // console.log("dot here");
        dotButton.disabled = true;
    } else {
        input.textContent += '.';
    }
}

// for clear button
function pressClearButton(){
    currentOperator = "";
    operand1 = "";
    operand2 = "";
    inputHistory.textContent  = "";
    input.textContent  = "0";
}

function pressDeleteButton(){
    input.textContent = input.textContent.slice(0, input.textContent.length - 1);
}

// Basic Math operators
function add(number1, number2){
    return (number1+number2);
}

function subtract(number1, number2){
    return (number1-number2);
}

function divide(number1, number2){
    return (number1/number2);
}

function multiply(number1, number2){
    return (number1*number2);
}

function operate(operator, number1, number2){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch (operator) {
        case "+":
            return add(number1, number2);
        case "-":
            return subtract(number1, number2);
        case "x":
            return multiply(number1, number2);
        case "÷":
          if (number2 === 0){
            return null
          } else {
            return divide(number1, number2);
          }
    }
}