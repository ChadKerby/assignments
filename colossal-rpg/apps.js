const readline = require("readline-sync");
let gameOver = false;
let inCombat = true;
let isPlayerAlive = true;
let isEnemyAlive = true;
let plasmaPistol = "Plasma Pistol";
// let kills = 0

// Greeting and Name
const greeting = readline.question(
  "\n Commander! Thank goodness you are okay, after that landing I thought you were done for.\n Now before you start exploring I need your identifier code, please enter it on your datapad. "
);
let name = readline.question("\nEnter you indentifier code: ");

// Player Stats
let player = {
  name: name,
  hp: 1000,
  inventory: [],
};

// Enemy Stats
let enemy = {
  hp: 100,
};


// Enemy List
function enemies() {
  let enemyList = ["Blorp", "Gamorrean", "Wookie Extremist"];
  // Use a new var to make a random enemy appear
  var randomEnemy = randomNum(0, 2);
  // Assign random enemy to var
  var newEnemy = enemyList[randomEnemy];
  fight(newEnemy);
}

// Random Number Generator(used to pull random items from arrays)
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Enemy Drops
function enemyDrops() {
  var drop = ["Credits", "Blue Cheese", "Broken Blaster"];
  // Use randomNum to pull from array above
  var randomDrop = randomNum(0, 2);
  // The newItem var takes the drop var and randomDrop var and ties what is generated to the newItem
  var newItem = drop[randomDrop];
  // Then we use .push to push the newItem into our player inventory
  player.inventory.push(newItem);
  return newItem;
}


// Damage
function hitDamage(hit) {
  hit = randomNum(1, 50);
  return hit;
}

// This function reflects the damge your character takes on a hit
function playerHealth() {
  player.hp = player.hp - hitDamage()
  return player.hp;
}

// Heal
function heal() {
  player.hp = player.hp + 20;
  return player.hp;
}

// This function reflects the damage the enemy takes on a hit
function enemyHealth() {
  enemy.hp = enemy.hp - hitDamage();
  return enemy.hp;
}

// Fight
function fight(newEnemy) {
    while (player.hp > 0 && enemy.hp > 0) {
        //  isAlive();
        var attack = readline.question( "\nYou have encountered a " + newEnemy + " Press 'a' to attack or 'r' to run. ");
      if (attack === 'a') {
        enemyHealth();
        playerHealth();
        console.log(`\nYou choose to attack with ${plasmaPistol} \n\nthe enemy has ${enemy.hp} You have ${player.hp}`);
    } else if(attack === 'r'){
      run();
    }
  } 
    if (player.hp <= 0) {
        console.log("\nYou have died! ");
        inCombat = false;
        gameOver = true;
        console.log("GAME OVER");
  } else if (enemy.hp <= 0){
        inCombat = false;
        console.log("The enemy dropped " + enemyDrops());
  } 
}

//WALK This while loop controls the movement and encounters
while (!gameOver) {
  var action = readline.question("Press 'w' to walk, 'i' to check inventory or 'h' to heal: ");
  if (action === 'i') {
    console.log(player);
  } else if (action === 'h') {
    heal();
  } else if (action === 'w' && doesEnemyAppear()) {
    enemies();
  }
}

// Random enemy appearance
function doesEnemyAppear() {
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 2) {
    return true;
  } else {
    return false;
  }
}

// Run
function run() {
  runChance = Math.floor(Math.random() * 2 + 1);
  if (runChance === 1) {
    console.log("\nSorry, you died. Please try again ");
    gameOver = true;
  } else {
    console.log("\nYour lucky...keep playing! ");
  }
}


const Enemies = (name, hp){
  this.name = name
  this.hp = hp
}
const newEnemy = new Enemies("Blorp", 100)





// Code that I tried

// let enemy = [{
//       name: "Blorp",
//       hp: 100,
//   },{
//       name: "Gamorrean",
//       hp: 100,
//   },{
//       name: "Wookie Extremist",
//       hp: 100,
//   }]



  
 // // function isAlive(){
//   if (player.hp <= 0) {
//     console.log("\nYou have died! ");
//     inCombat = false;
//     gameOver = true;
//     console.log("GAME OVER");
//   } else if (enemy.hp <= 0){
//       inCombat = false;
//       console.log("The enemy dropped " + enemyDrops());
//   } 
//   console.log(`\nYou choose to attack with ${newPistol} \n\nthe enemy has ${enemy.hp} You have ${player.hp}`)
// }
  
 