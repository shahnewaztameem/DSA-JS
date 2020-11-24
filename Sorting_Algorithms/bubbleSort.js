function bubbleSort(element) {
  let isSwapped = false;
  for (let i = element.length; i > 0; i--) {
    isSwapped = true;
    for (let j = 0; j < i - 1; j++) {
      if (element[j] > element[j + 1]) {
        swap(element, j, j + 1);
        isSwapped = false;
      }
    }
    if (isSwapped) break;
  }
  return element;
}

const swap = (arr, index1, index2) => [arr[index1], arr[index2]] = [arr[index2], arr[index1]]

console.log(bubbleSort([6, 7, 3, 2, 1, 9, 4]));
