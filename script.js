let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    // Check if the key pressed is a number (0-9) or a decimal point
    if (key >= '0' && key <= '9') {
        appendToDisplay(event.key);
    }
    // Check if the key pressed is an operator (+, -, *, /)
    else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    }
    // Check if the key pressed is the equals sign (= or Enter key)
    else if (event.key === '=' || event.key === 'Enter') {
        calculate();
    }
    // Check if the key pressed is the backspace key (to clear the last character)
    else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    // Check if the key pressed is the Escape key (to clear the display)
    else if (event.key === 'Escape') {
        clearDisplay();
    }
});
