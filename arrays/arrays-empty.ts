/**
 * TypeScript Empty Array Type Demonstration
 * 
 * This file demonstrates the empty array type ([]) in TypeScript,
 * which represents an array that can never contain any elements.
 * This is different from an array that happens to be empty but could
 * contain elements in the future.
 */

// Define a variable with the empty array type ([])
// This type means the array must always remain empty
const emptyArray: [] = [];

/**
 * IMPORTANT: The empty array type ([]) is very restrictive
 * 
 * The following operations would cause TypeScript compilation errors:
 */

// ERROR: Cannot assign elements to an empty array type
// Uncommenting this line would cause a compilation error:
// let emptyArray: [] = ["Spring"];

// ERROR: Cannot add elements to an empty array type
// Uncommenting this line would cause a compilation error:
// emptyArray.push("Summer");

/**
 * Practical Usage Notes:
 * 
 * 1. The empty array type ([]) is rarely useful in practice
 * 2. For empty arrays that will contain elements later, use a proper type:
 *    - string[] for string arrays
 *    - number[] for number arrays
 *    - etc.
 * 
 * Example of a correctly typed empty array that can accept elements:
 * const properSeasons: string[] = [];
 * properSeasons.push("Summer"); // This works fine
 */

// Made with Bob
