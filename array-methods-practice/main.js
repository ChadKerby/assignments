var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.

// 1
var poppedItem = vegetables.pop();
// 2
var shiftItem = fruit.shift();
// 3
var index = fruit.indexOf("orange");
// 4
var fruitPush = fruit.push(1);
// 5
console.log(vegetables.length);
// 6
var vegetablePush = vegetables.push(vegetables.lenth);
// 7
var food = fruit.concat(vegetables);
// 8
var remove = food.splice(4, 2);
// 9
var reverse = food.reverse();
// 10
var join = food.join(" ");

console.log(food)