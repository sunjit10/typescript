/**
 * TypeScript 'any' Type Array Demonstration
 * 
 * This file demonstrates the use of the 'any[]' type in TypeScript,
 * which allows an array to contain elements of different types.
 * While convenient, using 'any' bypasses TypeScript's type checking,
 * which can lead to potential runtime errors.
 */

// Define an array with mixed types using the 'any[]' type annotation
// This array contains numbers, strings, booleans, and objects
const mixedTypesArray: any[] = [
  10,                // number
  30,                // number
  "hello",           // string
  true,              // boolean
  "blah",            // string
  { bmi: 34.33 }     // object
];

// Access and display specific elements from the array
console.log("First element (number):", mixedTypesArray[0]);
console.log("Second element (number):", mixedTypesArray[1]);

/**
 * Notes on using 'any[]':
 * 
 * Advantages:
 * - Flexibility to store different types in the same array
 * - Useful for migrating JavaScript code to TypeScript
 * 
 * Disadvantages:
 * - Loses TypeScript's type safety benefits
 * - No intellisense/autocomplete for specific element types
 * - Can lead to runtime errors if assumptions about types are incorrect
 * 
 * Better alternatives when possible:
 * - Union types: (number | string | boolean)[]
 * - Tuple types: [number, number, string, boolean, string, object]
 */
