// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")
let diffEl = document.getElementById("diff-el")
let multiplyEl = document.getElementById("multiply-el")
let divEl = document.getElementById("div-el")
function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    diffEl.textContent = "Diff: " + result;
    
    // Implement subtraction logic here if needed
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        let result = num1 / num2;
        divEl.textContent = "Division: " + result;
    } else {
        divEl.textContent = "Cannot divide by zero";
    }
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    let result = num1 * num2;
    multiplyEl.textContent = "Multiply: " + result;

    // Implement multiplication logic here if needed
}
