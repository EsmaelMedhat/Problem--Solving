function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
}
let arr = [10, 20, 30, 40, 50];
let start = performance.now();
console.log(start);

console.log(twoSum(arr, 40));
console.log(performance.now() - start);

function optimizedTwoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.size === 0) {
      map.set(arr[i], i);
      continue;
    }
    let diference = target - arr[i];
    if (map.has(diference)) {
      return [map.get(diference), i];
    }
    map.set(arr[i], i);
  }
  return -1;
}

// console.log(optimizedTwoSum(arr, 40));
