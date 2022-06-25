module.exports = function reverse(n) {
  let abs = Math.abs(n).toString();
  let reverseAbs = abs.split("").reverse().join("");

  return +reverseAbs;
};
