// Define the monthly budget and the expenses
const monthlyBudget = 1000;
const expenses = [
  {
    food: 180,
    rent: 550,
    hobby: 120
  }
];

// Calculate the percentage of each expense relative to the monthly budget
const foodPercentage = (expenses.food / monthlyBudget) * 100;
const rentPercentage = (expenses.rent / monthlyBudget) * 100;
const hobbyPercentage = (expenses.hobby / monthlyBudget) * 100;

// Calculate the total spent
const totalSpent = expenses.food + expenses.rent + expenses.hobby;

// Display the result
console.log(`Monthly Budget: $${monthlyBudget}`);
console.log(`Food: $${expenses.food} (${foodPercentage.toFixed(1)}%)`);
console.log(`Rent: $${expenses.rent} (${rentPercentage.toFixed(1)}%)`);
console.log(`Hobby: $${expenses.hobby} (${hobbyPercentage.toFixed(1)}%)`);
console.log(`Total Spent: $${totalSpent}`);