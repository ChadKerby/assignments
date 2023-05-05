// var inputBox = document.getElementById("text-input")
// console.log(input.value)

// var logButton = document.getElementById("log")
// =======================================================================

// JS PROMISE CONSTRUCTOR
// resolve = then
// reject  = catch

// function flipCoin(){
//     return new Promise((resolve , reject) => {
//         const randomNum = Math.floor(Math.random() * 2)

//         if(randomNum === 0){
//             resolve("HEADS")
//         } else if(randomNum === 1){
//             reject("TAILS")
//         }
//     })
// }

// flipCoin()
//     .then(response => console.log("RESOLVED: " + response))
//     .catch(error => console.log("REJECTED: " + error))
// =======================================================================
// ASYNCRONOUS Event

// function getData(){
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("HELLO WORLD"), 3000)
//     })
// }

// getData()
//     .then(res => console.log(res))
//     .catch(err => console.log(error))