function binarySearch(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer <= rightPointer) {
    let middle = Math.floor((leftPointer + rightPointer) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (value > arr[middle]) {
      leftPointer = middle + 1;
    } else {
      rightPointer = middle - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19], 15));