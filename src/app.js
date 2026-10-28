function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof module !== "undefined") {
  module.exports = { add, greet };
}