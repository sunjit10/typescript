/**
 * TypeScript Multidimensional Arrays Demonstration
 * 
 * This file demonstrates how to create and access elements in a 
 * multidimensional array (specifically a 2D array) in TypeScript.
 * The example uses a tic-tac-toe board representation.
 */

// Define a 2D string array representing a tic-tac-toe board
// Each inner array represents a row of the board
const ticTacToe: string[][] = [
  ["X", "O", "X"],  // First row (index 0)
  ["O", "O", "X"],  // Second row (index 1)
  ["X", "X", "O"]   // Third row (index 2)
]; 

/**
 * Accessing elements in a 2D array:
 * - First index selects the row
 * - Second index selects the column within that row
 * 
 * For example:
 * - ticTacToe[0][0] is the top-left corner ("X")
 * - ticTacToe[1][1] is the center position ("O")
 * - ticTacToe[2][2] is the bottom-right corner ("O")
 */

// Print the element at the 3rd position (index 2) of the 2nd row (index 1)
// This corresponds to the value at position [1][2], which is "X"
console.log("Value at row 2, column 3:", ticTacToe[1][2]);

// Visualize the entire board
console.log("\nTic-tac-toe board:");
for (const row of ticTacToe) {
  console.log(row.join(" | "));
  if (row !== ticTacToe[ticTacToe.length - 1]) {
    console.log("---------");
  }
}

/**
 * Common operations with 2D arrays:
 * 
 * 1. Iterating through all elements:
 *    for (let i = 0; i < array.length; i++) {
 *      for (let j = 0; j < array[i].length; j++) {
 *        // Process array[i][j]
 *      }
 *    }
 * 
 * 2. Adding a new row:
 *    array.push(["new", "row", "elements"]);
 * 
 * 3. Adding an element to a specific row:
 *    array[rowIndex].push("new element");
 */
