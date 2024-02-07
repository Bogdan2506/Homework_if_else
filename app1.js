let firstNumber = parseInt(prompt("Put your first number:"));
let secondNumber = parseInt(prompt("Put your second number:"));
let result;

if (firstNumber > secondNumber) {
    result = `First number: ${firstNumber} is bigger than second: ${secondNumber}`;
} else if (firstNumber < secondNumber) {
    result = `Second number: ${secondNumber} is bigger than first: ${firstNumber}`;
} else {
    result = `The numbers are equal`;
}
alert(result);