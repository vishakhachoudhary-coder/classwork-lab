// Heron's Formula in JavaScript

let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("Sides:", a, b, c);
console.log("Semi-perimeter:", s);
console.log("Raw Area:", area);
console.log("Final (Floored) Area:", Math.floor(area));