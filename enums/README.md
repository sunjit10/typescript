# TypeScript Enums Examples

This directory contains examples demonstrating various features and concepts related to TypeScript enums.

## What are Enums?

Enums (short for enumerations) are a TypeScript feature that allows you to define a set of named constants. They provide a way to organize related values and make code more readable and maintainable. Enums don't exist in JavaScript - they're a TypeScript-specific feature that gets compiled down to JavaScript objects or values.

## Examples

### [enums-basics.ts](./enums-basics.ts)
- Demonstrates the basic concept of enums in TypeScript
- Compares traditional constant definitions with enum-based approach
- Shows how enums can be used as parameter types and for value comparison
- Illustrates the automatic numbering of enum values (starting from 0)

### [enums-numbers.ts](./enums-numbers.ts)
- Shows the default numeric behavior of enums
- Demonstrates how to customize enum values with specific numbers
- Illustrates how enum values auto-increment from the last defined value
- Shows examples of accessing enum values

### [enums-strings.ts](./enums-strings.ts)
- Demonstrates string enums where each value is assigned a string
- Shows how to define and use string-based enum values
- Illustrates how string enums provide more descriptive values than numeric enums

### [enums-mixed.ts](./enums-mixed.ts)
- Shows how enums can contain both numeric and string values
- Demonstrates the flexibility of TypeScript enums to mix different value types
- Illustrates how numeric values auto-increment while string values must be explicitly assigned

## Key Benefits of Enums

1. **Type Safety**: Enums provide type checking, helping catch errors at compile time
2. **Readability**: Makes code more self-documenting by using descriptive names
3. **Organization**: Groups related constants together in a logical structure
4. **Intellisense**: Provides better IDE support with autocompletion
5. **Maintainability**: Centralizes related values, making code easier to update

## Usage Considerations

- Numeric enums have reverse mappings (value to name), but string enums don't
- Const enums (not shown in examples) are completely removed during compilation for performance
- Enums can be used as types for variables, parameters, and return values
