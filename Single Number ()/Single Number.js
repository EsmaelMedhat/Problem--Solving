function SingleNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        x++;
      }
    }
    if (x === 2) x = 0;
    else if (x === 1) return arr[i];
  }
  return "not exsist";
}
function optimizedSingleNumber(arr) {
  let unique = 0;
  for (let num of arr) {
    unique ^= num;
  }
  return arr.length > 0 ? unique : "not exist";
}

let arr = [1, 8, 1, 2, 2, 3, 4, 6, 4, 5, 6, 5, 8];
console.log(SingleNumber(arr));
