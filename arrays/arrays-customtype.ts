/**
 * TypeScript Arrays with Custom Types
 * 
 * This file demonstrates how to create and use arrays of custom types in TypeScript.
 * Custom types allow you to define the structure of complex objects that can be
 * stored in arrays, providing both type safety and better code organization.
 */

// Define a custom type for geographic locations
type MyLocation = {
  lat: number,   // Latitude coordinate
  long: number   // Longitude coordinate
}

// Create an array of the custom MyLocation type
// Each element must conform to the structure defined in the type
const locations: MyLocation[] = [
  { lat: 20.78, long: 30.12 },  // First location
  { lat: 50.67, long: 78.22 }   // Second location
];

// Demonstrate adding a new element to the array using the push() method
// The new element must also conform to the MyLocation type
locations.push({ lat: 40.677, long: 80.223 });

// Display all locations in the array using a for...of loop
console.log("All locations:");
for (const location of locations) {
  console.log(`  Latitude: ${location.lat}, Longitude: ${location.long}`);
}

/**
 * Benefits of using custom types with arrays:
 * 
 * 1. Type safety - TypeScript ensures all elements follow the defined structure
 * 2. Code completion - IDE provides property suggestions for array elements
 * 3. Self-documenting code - The type definition serves as documentation
 * 4. Compile-time error checking - Catches errors before runtime
 */
