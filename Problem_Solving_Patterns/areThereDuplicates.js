// Implement a function called, areThereDuplicates which accepts a variable number of arguments,and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// frequency counter pattern
function areThereDuplicates(...args) {
  let lookup = {};
  for (let i = 0; i < args.length; i++) {
    let elements = args[i];
    lookup[elements] ? lookup[elements] += 1 : lookup[elements] = 1;
    if (lookup[elements] > 1) {
      return true
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));