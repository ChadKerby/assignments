var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var animals = ['cat', 'dog', 'fish', 'elephant', 'snake']
var text = ';alkdn;ldkj;lsdkjf;lakdjf;lsdkjf;l'

console.log(typeof(alphabet))

function forception (array, string){
    let upperAlpha = string.toUpperCase();
    let splitUpperAlpha = upperAlpha.split("");
    const result = []
    for(i = 0; i < array.length; i++){
        //i increments once 
        result.push(array[i])
        for(j = 0; j < splitUpperAlpha.length; j++){
         //j goes through whole alphabet
         result.push(splitUpperAlpha[j])
        }
    }
    return result
}

console.log(forception(people, alphabet))
console.log(forception(animals, text))