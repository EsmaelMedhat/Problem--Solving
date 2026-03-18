function Search(arr, tar) {
  let l = 0,
    h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid] === tar) {
      return mid;
    } else if (arr[mid] > tar) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return "NOT EXSIST";
}
let arr = [10, 15, 20, 30, 35, 40, 2000];
console.log(Search(arr, 200));
