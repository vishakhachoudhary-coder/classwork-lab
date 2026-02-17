// Task 3: Nullish Defaults

let userName = null;

// Using nullish coalescing operator ??
let displayName = userName ?? "Guest";

// Output
console.log("Variable value:", userName);
console.log("Output: Welcome,", displayName);