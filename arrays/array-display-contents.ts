/**
 * Array Iteration Demonstration
 * 
 * This file demonstrates different methods to iterate through arrays in TypeScript.
 * It shows three common approaches:
 * 1. Traditional for loop with index
 * 2. For...of loop (ES6+)
 * 3. Array.forEach() method
 */

// Define a string array containing the four seasons
const seasons: string[] = ["Summer", "Fall", "Winter", "Spring"];

// Method 1: Traditional for loop with index
console.log("Method 1: Using traditional for loop with index:");
for (let i = 0; i < seasons.length; i++) {
    console.log(`  ${i}: ${seasons[i]}`);
}

// Method 2: For...of loop (ES6+)
console.log("\nMethod 2: Using for...of loop:");
for (const season of seasons) {
    console.log(`  ${season}`);
}

// Method 3: Array.forEach() method
console.log("\nMethod 3: Using forEach() method:");
seasons.forEach((season, index) => {
    console.log(`  ${index}: ${season}`);
});

/**
 * Notes:
 * - The for...of loop is cleaner when you only need the element value
 * - forEach provides both element and index if needed
 * - Traditional for loop gives the most control over iteration
 */

