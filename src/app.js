function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

function subtract(a, b) {
  return a - b;
}

if (typeof module !== "undefined") {
  module.exports = { add, greet, subtract };
}