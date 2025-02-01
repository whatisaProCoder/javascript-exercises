const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
};

const multiply = function (arr) {
  const mult = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return mult;
};

const power = function (n, p) {
  return Math.pow(n, p);
};

const factorial = function (n) {
  let f = 1;
  for (let i = 2; i <= n; i++)
    f *= i;
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
