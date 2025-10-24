// Use native JavaScript implementations and CommonJS exports so Jest (CommonJS) can require this file
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        // message matches tests expecting "Cannot divide by zero"
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    if (a < 0) {
        throw new Error("Square root of negative number is not allowed.");
    }
    return Math.sqrt(a);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    sqrt,
};