const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function romanToInteger(roman) {
  let num = 0;
  for (let i = 0; i < roman.length; i++) {
    let curr = romanNumbers[roman[i]];
    let next = romanNumbers[roman[i + 1]];
    if (next && curr < next) {
      num -= curr;
    } else {
      num += curr;
    }
  }
  return num;
}

console.log(romanToInteger("VII"));
