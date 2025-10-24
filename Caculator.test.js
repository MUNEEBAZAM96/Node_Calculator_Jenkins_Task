// calculator.test.js

const { add, subtract, multiply, divide } = require("./calculator.js");

describe("Calculator Functions", () => {

  // ✅ Addition Tests
  test("should return correct sum of two positive numbers", () => {
    expect(add(5, 3)).toBe(8);
  });

  test("should return correct sum with negative numbers", () => {
    expect(add(-5, 3)).toBe(-2);
  });

  test("should return correct sum when both numbers are negative", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  // ✅ Subtraction Tests
  test("should return correct difference of two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("should handle negative numbers correctly in subtraction", () => {
    expect(subtract(-5, -2)).toBe(-3);
  });

  // ✅ Multiplication Tests
  test("should return correct product of two positive numbers", () => {
    expect(multiply(3, 5)).toBe(15);
  });

  test("should return correct product with negative numbers", () => {
    expect(multiply(-2, 4)).toBe(-8);
  });

  test("should return 0 when one operand is 0", () => {
    expect(multiply(0, 7)).toBe(0);
  });

  // ✅ Division Tests
  test("should return correct quotient of two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("should return correct quotient for negative numbers", () => {
    expect(divide(-9, 3)).toBe(-3);
  });

  test("should throw error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
