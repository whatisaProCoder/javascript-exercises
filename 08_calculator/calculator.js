const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((element) => sum += element);
  return sum;
};

const multiply = function (arr) {
  let mult = 1;
  arr.forEach(element => mult *= element);
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
