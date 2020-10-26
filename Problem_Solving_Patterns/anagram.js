// anagram using frequency counter pattern
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of str1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of str2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }

//   return true;
//   // console.log(frequencyCounter1, frequencyCounter2);
// }

function validAnagram(first, second) {
  if (first.length !== second.length)
    return false;
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter])
      return false;
    else
      lookup[letter] -= 1
  }
  return true;
  console.log(lookup);
}

console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram("rat", "car"));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));
