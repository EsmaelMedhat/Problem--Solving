function thereSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let h = j + 1; h < arr.length; h++) {
        let x = arr[i] + arr[j] + arr[h];
        if (x === target) {
          return [i, j, h];
        }
      }
    }
  }
  return null;
}
function optimizedThereSum(nums, target) {
  let results = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        results.push(nums[i], nums[left], nums[right]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return results;
}

let arr = [15, 10, 30, 40, 12, 13];

console.log(optimizedThereSum(arr, 35));
