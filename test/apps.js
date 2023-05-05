// .map() example
// const numArr = [1, 2, 3, 4, 5]
// const numArr2 = numArr.map(num => num + 2)
// console.log(numArr2)

// .filter() is used in this example to pull any number that is greater than 4 in the above array
// const numArr2 = numArr.filter(num => num > 4)
// console.log(numArr2)

// .reduce() is used to add all the numbers in the array to give you the answer 12
const numArr = [3, 4, 5]
let numArr2 = numArr.reduce((final, curr) => final += curr, 0)
console.log(numArr2)