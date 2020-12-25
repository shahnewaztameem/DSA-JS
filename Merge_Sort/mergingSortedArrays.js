// Merge 2 sorted arrays
function merge(arr1, arr2) {
  let result = [];
  let i = j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

console.log(merge([1, 10, 52], [2, 14, 20, 50, 99]));