/**
 * TypeScript Null/Undefined Checking Example
 * 
 * This file demonstrates how TypeScript handles null/undefined values
 * and shows string iteration techniques.
 */

// SECTION: Null/Undefined Checking
// Declare a string variable without initialization (undefined)
// Using the '!' modifier to tell TypeScript this will be assigned later
let word1!: string;

// TypeScript allows checking for "falsy" values (null, undefined, empty string, 0, etc.)
// The '!' operator checks if a value is falsy
if (!word1) {
  console.log("word1 is empty"); // This will execute since word1 is undefined
}

// SECTION: String Assignment and Iteration
// Assign a value to our previously undefined variable
word1 = "hello";

// Iterate through each character in the string using for...of loop
// This demonstrates TypeScript's ability to iterate over string characters
for (let c of word1) {
  console.log(c); // Prints each character on a new line: 'h', 'e', 'l', 'l', 'o'
}
