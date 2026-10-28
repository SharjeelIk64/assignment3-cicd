const { add, greet, subtract } = require("../src/app");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("greets by name", () => {
  expect(greet("Ali")).toBe("Hello, Ali!");
});

test("subtracts two numbers", () => {
  expect(subtract(5, 3)).toBe(2);
});