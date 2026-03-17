function MergeTwoSortedLists(arr1, arr2, list) {
  let i = 0;
  let j = 0;
  while (j < arr2.length && i < arr1.length) {
    if (arr1[i] === arr2[j] || arr1[i] < arr2[j]) {
      list.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      list.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    list.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    list.push(arr2[j]);
    j++;
  }
}
let arr1 = [1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 6, 8, 9, 10];
let arr2 = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 5, 6, 7, 8, 9, 10];
let list = [];
MergeTwoSortedLists(arr1, arr2, list);
console.log(list);
console.log(Infinity);
