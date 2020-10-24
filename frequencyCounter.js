function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    var currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    arr1.splice(currentIndex, 1);
  }
  return true;
}


console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));