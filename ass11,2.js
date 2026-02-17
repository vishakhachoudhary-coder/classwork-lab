// Define the original total amount
const originalTotal = 850;

// Generate a random discount between 5% and 15%
const randomDiscount = Math.floor(Math.random() * (15 - 5 + 1)) + 5; // Random number between 5 and 15

// Calculate the amount saved
const amountSaved = (randomDiscount / 100) * originalTotal;

// Calculate the final adjusted expense
const finalAdjustedExpense = originalTotal - amountSaved;

// Display the result
console.log(`Original Total: $${originalTotal}`);
console.log(`Random Discount: ${randomDiscount}%`);
console.log(`Amount Saved: $${amountSaved.toFixed(2)}`);
console.log(`Final Adjusted Expense: $${finalAdjustedExpense.toFixed(2)}`);