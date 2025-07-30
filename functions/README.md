# TypeScript Functions

This directory contains examples demonstrating various aspects of TypeScript functions.

## Function Parameters

- **[Parameters Example 1](./function-parameters1.ts)**: Basic parameter type annotations for functions
  - Shows how TypeScript enforces parameter types
  - Includes examples with both regular functions and arrow functions

- **[Parameters Example 2](./function-parameters2.ts)**: Multiple parameters with different types
  - Demonstrates functions with multiple parameters of different types
  - Shows how TypeScript enforces both parameter count and types

## Return Values

- **[Basic Return Values](./function-returnvalue.ts)**: Explicit return type annotations
  - Shows how to specify return types for functions
  - Demonstrates return type inference

- **[Union Return Types](./function-returnvalue-union.ts)**: Functions that can return multiple types
  - Uses the `|` operator to indicate a function can return different types
  - Example returns either a number or string based on a condition

- **[Void Return Type](./function-returnvalue-void.ts)**: Functions that don't return a value
  - Demonstrates the `void` return type for functions that don't return anything
  - Shows how TypeScript prevents returning values from void functions

- **[Never Return Type](./function-returnvalue-never.ts)**: Functions that never complete normally
  - Uses the `never` type for functions that always throw exceptions
  - Useful for error handling functions

## Function Features

- **[Default Parameter Values](./function-defaultvalues.ts)**: Setting default values for parameters
  - Shows how to provide fallback values for function parameters
  - Demonstrates calling functions with and without the optional parameters

- **[Anonymous Functions](./function-anonymous.ts)**: Using anonymous functions with arrays
  - Demonstrates type inference in anonymous functions
  - Shows how TypeScript prevents type errors in callbacks

- **[Return Type Annotations](./function-annotate-return.ts)**: Explicitly specifying return types
  - Shows how to annotate functions with object return types
  - Demonstrates returning complex types from functions

- **[Function vs Variable Type Checking](./function-variables-difference.ts)**: Differences in type checking
  - Illustrates a quirk in TypeScript's type checking system
  - Shows how excess properties are handled differently for object literals vs variables

## Exercises

- **[Function Exercises](./function-exercise1.ts)**: Practice examples
  - `twoFer` function with default parameters
  - `isLeapYear` function demonstrating boolean return values and conditional logic
