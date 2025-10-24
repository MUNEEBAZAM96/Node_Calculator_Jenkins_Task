import math from 'mathjs';

export function add(a, b) {
    return math.add(a, b);
}

export function subtract(a, b) {
    return math.subtract(a, b);
}

export function multiply(a, b) {
    return math.multiply(a, b);
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return math.divide(a, b);
}

export function power(a, b) {
    return math.pow(a, b);
}

export function sqrt(a) {
    if (a < 0) {
        throw new Error("Square root of negative number is not allowed.");
    }
    return math.sqrt(a);
}