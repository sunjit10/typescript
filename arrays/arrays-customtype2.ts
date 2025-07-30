/**
 * TypeScript Arrays with Custom Types - Function Parameters
 * 
 * This file demonstrates how to use arrays of custom types as function parameters.
 * It shows how to define a custom type, create objects of that type,
 * and pass an array of those objects to a function for processing.
 */

// Define a custom Product type with name and price properties
type Product = {
  name: string;   // Product name
  price: number;  // Product price
};

/**
 * Calculates the total price of all products in an array
 * 
 * @param products - An array of Product objects to sum
 * @returns The total price of all products
 */
function getTotal(products: Product[]): number {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}

// Create individual product objects
const product1: Product = { name: "A", price: 20 };
const product2: Product = { name: "B", price: 30 };

// Calculate the total price by passing an array of products to the function
const total = getTotal([product1, product2]);

// Display the result
console.log(`Total price: $${total}`);

/**
 * Key concepts demonstrated:
 * 
 * 1. Using custom types as function parameter types
 * 2. Creating an array inline when calling a function
 * 3. Type safety ensures all array elements have the required properties
 * 4. Function parameters with array type annotations
 */

// Made with Bob
