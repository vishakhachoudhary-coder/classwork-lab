// // // Task 2: The Weighted Coin Flip

// Generate random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;

// Check win condition
let status = number > 75 ? "You win!" : "You lose.";

// Output
console.log("Number Generated:", number);
console.log("Status:", status);