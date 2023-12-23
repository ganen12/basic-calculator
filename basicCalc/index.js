
const display = document.getElementById('display');


function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function del() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


document.addEventListener('keydown', function(event) {
    
    var key = event.key;

    // Check for numeric keys, operators, and Enter key
    if (/^[0-9\+\-\*\/\.\=]$/.test(key)) {
        event.preventDefault(); // Prevent default behavior (e.g., input into other elements)
        if (key === '=') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        del();
    }
});

