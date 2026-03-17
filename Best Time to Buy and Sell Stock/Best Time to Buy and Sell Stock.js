function solve(price) {
  let profit = 0;
  for (let i = 0; i < price.length; i++) {
    for (let j = i + 1; j < price.length; j++) {
      if (price[j] - price[i] > profit) {
        profit = price[j] - price[i];
      }
    }
  }
  return profit;
}
function optimized(price) {
  let profit = 0;
  let minprice = price[0];
  for (let i = 1; i < price.length; i++) {
    if (minprice > price[i]) {
      minprice = price[i];
    } else if (price[i] - minprice > profit) {
      profit = price[i] - minprice;
    }
  }
  return profit;
}
let price = [7, 1, 5, 3, 6, 4];
console.log(solve(price));
