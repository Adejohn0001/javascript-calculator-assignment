
//choose your operator
const operator = prompt('Choose operator ( either +, -, * or / ): ');

// choosing of any number
let firstNumber = parseFloat(prompt("Enter your first number: "));
let secondNumber = parseFloat(prompt("Enter your second number: "));

let finalResult;
if(operator == '+'){
    finalResult = firstNumber + secondNumber;
} else if(operator == '-') {
    finalResult = firstNumber - secondNumber;
} else if(operator == '*') {
    finalResult = firstNumber * secondNumber;
} else {
    finalResult = firstNumber / secondNumber;
}


alert(`${firstNumber} ${operator} ${secondNumber} = ${finalResult}`);
