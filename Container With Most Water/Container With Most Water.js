function ContainerWithMosTwater(height) {
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let r = (j - i) * Math.min(height[j], height[i]);
      if (r > res) {
        res = r;
      }
    }
  }
  return res;
}
function optimizedContainer(height) {
  const n = height.length;

  let left = 0;
  let right = n - 1;
  let maxArea = 0;
  while (left < right) {
    const leftLineH = height[left];
    const rightLineH = height[right];

    const width = right - left;
    let h = 0;
    if (leftLineH <= rightLineH) {
      h = leftLineH;
      left++;
    } else {
      h = rightLineH;
      right--;
    }

    const area = width * h;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(optimizedContainer(height));
