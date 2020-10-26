// Write a function called sameFrequency.Given two positive integers, find out if the two numbers have the same frequency of digits. O(n)

function sameFrequency(num1, num2) {
  let num1Str = num1.toString();
  let num2Str = num2.toString();

  let lookup = {}
  if (num1Str.length !== num2Str.length) {
    return false;
  }

  for (let i = 0; i < num1Str.length; i++) {
    let letters = num1Str[i];
    lookup[letters] ? lookup[letters] += 1 : lookup[letters] = 1;
  }

  for (let i = 0; i < num2Str.length; i++) {
    let letters = num2Str[i];

    if (!lookup[letters]) {
      return false;
    } else {
      lookup[letters] -= 1;
    }
  }
  return true
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(22, 222)); // false
