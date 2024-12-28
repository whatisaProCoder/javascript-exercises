const convertToCelsius = function (f) {
  let c = (5 * (f - 32)) / 9;
  c = Math.round(c * 10) / 10;
  return c;
};

const convertToFahrenheit = function (c) {
  let f = (9 * c) / 5 + 32;
  f = Math.round(f * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
