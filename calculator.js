// let output = document.getElementById('output');
// let currentInput = '';

// function appendNumber(number){
//     currentInput += number;
//     output.value = currentInput;
// }


// function appendOperator(operator) {
//     currentInput += ' ' + operator + ' ';
//     display.value = currentInput;
// }

// function calculate() {
//     try {
//         display.value = eval(currentInput);
//         currentInput = display.value;
//     } catch (e) {
//         output.value = '';
//         currentInput = '';
//     }
// }
// function clearDisplay() {
//     output.value = '';
//     currentInput = '';

// }

let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

function calculate() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
};