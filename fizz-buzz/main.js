// Using a for loop that iterates over a variable i that increments up to 100.
// Next, we have an if nested within our for loop, we have used the % (The modulus operator returns the remainder of an integer division) hence we use it to check if a number is divisible by 15. And in case the condition is true, it outputs “FizzBuzz”. We use 15 to check if the number is divisible by 3 & 5. Post which we divide it by 3 & 5 accordingly.
// We check 15 first as all numbers divisible by 3 & 5 would divide 15 and an if condition breaks once the output is true.
// Similarly, we repeat it for 3 and 5 using else if.

for (var i = 1; i <= 100; i++) {

    if (i % 15 == 0){ 
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0){ 
        console.log("Fizz");
    }
    else if (i % 5 == 0){
        console.log("Buzz");
    }
    else console.log(i);
}
