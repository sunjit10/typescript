/**
 * TypeScript Control Flow Examples
 * This file demonstrates the use of switch statements within while loops
 */

// Array of flag colors to process
let flagColors: string[] = ["red", "white", "blue"];

/**
 * Prints each color in the provided array using a while loop and switch statement
 * @param colors An array of color strings to process
 */
function printFlagColors(colors: string[]): void {
  // Initialize counter for while loop
  let i = 0;
  
  // Process each color in the array
  while (i < colors.length) {
    let color = colors[i];
    
    // Use switch statement to handle each color case
    switch (color) {
      case "red":
        console.log("red");
        break;
      case "white":
        console.log("white");
        break;
      case "blue":
        console.log("blue");
        break;
      default:
        console.log(`Unknown color: ${color}`);
        break;
    }
    
    // Increment counter
    i++;
  }
}

// Execute the function with our flag colors array
printFlagColors(flagColors);

// Made with Bob
