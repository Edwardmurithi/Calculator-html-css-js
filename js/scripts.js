const display = document.getElementById('display');


function displayValue(input) {
    display.value += input;
}

function clearAllValues() {
    display.value = '';
}

function deleteValue() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}