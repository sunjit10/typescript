/**
 * TypeScript Multidimensional Empty Array Demonstration
 * 
 * This file demonstrates multidimensional arrays in TypeScript,
 * specifically showing the initialization of a 2D array with an empty inner array.
 * It also illustrates the constraints when working with such arrays.
 */

// Define a 2D string array initialized with a single empty inner array
// Type annotation string[][] indicates an array of string arrays
const grocery: string[][] = [[]];

/**
 * Understanding the initialization:
 * 
 * 1. grocery is of type string[][], which means:
 *    - It's an array that contains arrays of strings
 *    - Each inner array can contain string elements
 * 
 * 2. The initialization [[]]:
 *    - Creates one outer array with a single element
 *    - That single element is an empty array
 *    - So grocery has one empty inner array
 */

// You CAN add elements to the existing empty inner array
grocery[0].push("apples");
grocery[0].push("bananas");

// You CAN add new inner arrays
grocery.push(["spinach", "kale"]);

// Display the resulting structure
console.log("Grocery list structure:");
console.log(grocery);

/**
 * Note: The commented code below is incorrect and would cause an error:
 * 
 * // ERROR: Cannot push a 2D array into a 2D array
 * // grocery.push([["apples", "bananas"], ["spinach", "kale"]]);
 * 
 * This would attempt to add a 3D structure into a 2D array,
 * which violates the string[][] type constraint.
 */
