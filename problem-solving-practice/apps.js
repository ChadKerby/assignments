// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// function largest(array) {
//     // array[0] starts the function at the 0 index
//     var value = array[0];

//     for (var i = 1; i < array.length; i++) {
//         if (array[i] > value) value = array[i];
//     }
//     return value;
// }
// console.log(largest([6, 13, 250, 3]));
// console.log(largest([3, 5, 2, 8, 1]));
// console.log(largest([-13, 40, 3, 0, 19, 22]));

// Write a function that takes an array of words and a character and returns each word that has that character present.
function lettersWithStrings(arr, char) {
    let stringsWithLetters = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(char)) {
        stringsWithLetters.push(arr[i]);
      }
    }
    return stringsWithLetters;
  }
  
// test data
console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!", "test!"]
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
console.log(lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.




// test data
// console.log(isDivisible(4, 2)) // => true
// console.log(isDivisible(9, 3)) // => true
// console.log(isDivisible(15, 4)) // => false
