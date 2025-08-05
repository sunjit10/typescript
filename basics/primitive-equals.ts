/**
 * TypeScript Primitive Equality Demonstration
 * 
 * This file demonstrates the difference between strict equality (===) and 
 * loose equality (==) operators when comparing different primitive values.
 */

/**
 * Checks if two values are strictly equal (===) and logs the result
 * The strict equality operator compares both value and type without conversion
 * 
 * @param n1 First value to compare
 * @param n2 Second value to compare
 */
function checkTripleEquals(n1: any, n2: any): void {
  if (n1 === n2) {
    console.log(`${n1} === ${n2}`);
  } else {
    console.log(`${n1} IS NOT === ${n2}`);
  }
}

/**
 * Checks if two values are loosely equal (==) and logs the result
 * The loose equality operator performs type coercion before comparison
 * 
 * @param n1 First value to compare
 * @param n2 Second value to compare
 */
function checkDoubleEquals(n1: any, n2: any): void {
  if (n1 == n2) {
    console.log(`${n1} == ${n2}`);
  } else {
    console.log(`${n1} IS NOT == ${n2}`);
  }
}

// === STRICT EQUALITY EXAMPLES (===) ===
console.log("\n=== STRICT EQUALITY EXAMPLES (===) ===");

// Different types with same string representation - no type coercion
checkTripleEquals(10, "10");      // False: number vs string
// Same type and value
checkTripleEquals(20, 20);        // True: both are numbers with same value
// Different types and different values
checkTripleEquals(true, "true");  // False: boolean vs string
// Same type but different case
checkTripleEquals("a", "A");      // False: case-sensitive comparison

// === LOOSE EQUALITY EXAMPLES (==) ===
console.log("\n=== LOOSE EQUALITY EXAMPLES (==) ===");

// Different types but convertible values - type coercion happens
checkDoubleEquals(30, "30");      // True: string "30" is converted to number 30
// Same type and value
checkDoubleEquals(40, 40);        // True: both are numbers with same value
// Different types that don't convert to same value
checkDoubleEquals(false, "false"); // False: "false" doesn't convert to boolean false
// Same type but different case
checkDoubleEquals("b", "B");      // False: case-sensitive even with loose equality

// === SPECIAL CASES ===
console.log("\n=== SPECIAL CASES ===");

// null and undefined
checkTripleEquals(null, undefined);  // False: different types
checkDoubleEquals(null, undefined);  // True: special case in JavaScript

// NaN comparisons
checkTripleEquals(NaN, NaN);         // False: NaN is never equal to anything, even itself
console.log(`isNaN(NaN): ${isNaN(NaN)}`); // True: proper way to check for NaN

// Zero comparisons
checkTripleEquals(0, -0);            // True: JS treats -0 and 0 as equal