function productExceptSelfBrute(nums) {
  let n = nums.length;
  let res = new Array(n);

  for (let i = 0; i < n; i++) {
    let curr = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        curr *= nums[j];
      }
    }
    res[i] = curr;
  }
  return res;
}
function productExceptSelfOptimized(nums) {
  let n = nums.length;
  let res = new Array(n).fill(1);

  let pre = 1;
  for (let i = 0; i < n; i++) {
    res[i] = pre;
    pre *= nums[i];
  }

  let after = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= after;
    after *= nums[i];
  }

  return res;
}

console.log(productExceptSelfOptimized([1, 2, 3, 4]));
