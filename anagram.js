// anagram using frequency counter pattern
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
  // console.log(frequencyCounter1, frequencyCounter2);
}


console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza'));  // false
console.log(validAnagram('anagram', 'nagaram'));  // true
console.log(validAnagram("rat", "car"));  // false) // false
console.log(validAnagram('awesome', 'awesom'));  // false
console.log(validAnagram('qwerty', 'qeywrt'));  // true
console.log(validAnagram('texttwisttime', 'timetwisttext'));  // true
