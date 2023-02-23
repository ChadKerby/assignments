// Preliminaries
// 1. Write a for loop that prints to the console the numbers 0 through 9.
// 2. Write a for loop that prints to the console 9 through 0.
// 3. Write a for loop that prints these fruits to the console. 
// const fruit = ["banana", "orange", "apple", "kiwi"]

// // 1.
// for (var i = 0; i <= 9; i++){
//     console.log([i])
// }

// // 2.
// for (var i = 9; i >= 0; i--){
//     console.log([i])
// }

// // 3.
// for (var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }



// Bronze
// 1. Write a for loop that will push the numbers 0 through 9 to an array.
// 2. Write a for loop that prints to the console only even numbers 0 through 100.
// 3. Write a for loop that will push every other fruit to an array.`
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// 1.
// var numberArr = [];

// for(var i = 0; i <= 9; i++){
//     numberArr.push(i);
// }
// console.log(numberArr); 

// 2.
// for(var i = 0; i <= 100; i++){
//     if([i] % 2 == 0){
//         console.log([i])
//     }
// };
// 3.
var newFruit = []

for(var i = 0; i < fruit.length; i++){
    if([i] % 2 === 0){
        newFruit.push(i)
    } 
      
} console.log(newFruit)