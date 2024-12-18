// script.js

const display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}

function appendCharacter(char) {
    display.textContent += char;
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        display.innerText = Number(result).toFixed(10); // Limit to 6 decimal places
    } catch (error) {
        display.innerText = 'Error'; // Handle invalid inputs
    }
}
