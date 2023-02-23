const readline = require("readline-sync");
const name = readline.question("What is your name? ");
// Game Variables
let gameOver = false;
let doorKey = false;
let answer = readline.question(`Hello ${name}. If you want to leave this room you must choose from the options below.
    Would you like to:
    a. Put your hand in the hole?
    b. Look for key?
    c. Open door?`)

// While loop takes player through game
while(answer){
    if(answer === "a"){
        console.log("The bear on the other side enjoyed your arm, you bleed out and die.");
        gameOver = true;
        console.log("GAME OVER");
        break;
    }else if (answer === "b"){
        console.log("You have the key!");
        doorKey = true;
        readline.question(`Now that you have the key what would you like to do next?
        a. Put your hand in the hole?
        b. Open the door?`);
        if (answer === "a"){
            console.log("The bear on the other side enjoyed your arm, you bleed out and die.");
            break;
        }else if(answer === "b"){
            console.log("The key worked! You live to fight another day!");
            break;
        }
    }else if (answer === "c"){
        console.log("The door is locked, maybe you need a key.");
        const answer2 = readline.question(`What should you do now?
        a. Put your hand in the hole?
        b. Look for key?`);
        if (answer2 === "a"){
            console.log("One should never put your hand in strange places. A wizzard has cut off your hand for a poition, you bleed out and die");
            break;
            }else if (answer2 === "b"){
            console.log("You have found the key!");
            doorKey = true;
            const answer3 =readline.question(`What should you do now?
            a. Put you hand in the hole?
            b. Open the door?`);
            if (answer3 === "a"){
                console.log("Who does that?! You get stung by a small scorpion, the venom is too much for your frail body and you die.");
                break;
            }else if ( answer3 === "b"){
                console.log("Wow! You did it, who knew all you needed was a key to be free.")
                break;
            }
        }
    }
}

