/**
 * TypeScript Array Basics
 * 
 * This file demonstrates the two primary syntaxes for declaring typed arrays in TypeScript.
 * TypeScript arrays are homogeneous, meaning they contain elements of a single type.
 */

// ===== Array Declaration Syntax 1: Using the type[] notation =====
// This is the most common and recommended syntax in TypeScript

// String array using type[] syntax
const names: string[] = ["hello", "world"];

// Number array using type[] syntax
const ages: number[] = [10, 30, 40, 20, 70, 60];


// ===== Array Declaration Syntax 2: Using the Array<type> generic notation =====
// This syntax is equivalent to type[] but uses generics

// String array using Array<type> syntax
const cities: Array<string> = ["NYC", "SFO", "PHX"];

// Number array using Array<type> syntax
const temps: Array<number> = [80, 85, 45, 95];

/**
 * Notes on TypeScript Arrays:
 * 
 * 1. Both syntaxes (type[] and Array<type>) are functionally equivalent
 * 2. The type[] syntax is generally preferred for its conciseness
 * 3. Array<type> syntax may be more familiar to developers from other languages
 * 4. TypeScript enforces type safety - you cannot add elements of a different type
 * 5. Arrays are zero-indexed, just like in JavaScript
 */
