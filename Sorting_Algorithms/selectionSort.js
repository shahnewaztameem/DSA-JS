function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if(i !==lowest) {
      swap(arr, i, lowest)
    }
  }
  return arr;
}

const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

console.log(selectionSort([2, 8, 7, 4, 6, 1]));
