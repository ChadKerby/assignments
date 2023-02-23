const readline = require("readline-sync")

let firstNum = readline.question("Enter your first number");
console.log(firstNum);

let secondNum = readline.question("Enter your second number");
console.log(secondNum);

let operator = readline.question("Enter the operation to perform: add, sub, multi, or divide");
if(operator === "add"){
    console.log("The result is: " + add(firstNum, secondNum))
} else if(operator === "sub"){
    console.log("The result is: " + subtract(firstNum, secondNum))
} else if(operator === "multi"){
    console.log("The result is: " + multiply(firstNum, secondNum))
} else if(operator === "divide"){
    console.log("The result is: " + divide(firstNum,secondNum))
} else{
    console.log("Invalid input! Please enter 'add', 'sub', 'multi', or 'divide'.")
}

function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}