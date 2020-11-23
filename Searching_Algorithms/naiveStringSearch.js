function naiveStringSearch(input, target) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] !== input[i + j]) {
        break;
      } if(j === target.length - 1) count++;
    }
  }
  return count;
}
