const display = document.getElementById("display");
let previousResult = false;

function appendToDisplay(input) {
    if (previousResult) {
        display.value = '';
        previousResult = false;
    }
    if (['+', '-', '*', '/'].includes(input) && ['+', '-', '*', '/'].includes(display.value.slice(-1))) {
        display.value = display.value.slice(0, -1);
    }
    display.value += input;
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
    previousResult = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        previousResult = true;
    } catch {
        display.value = 'Error';
        previousResult = true;
    }
}