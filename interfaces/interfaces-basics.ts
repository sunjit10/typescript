// Using Type Aliases

type Point1 = {
 x: number;
 y: number;
}

const pt1: Point1 = {x: 123, y: 12}

// Using Interfaces
// Looks similar to Type Alias -- NO EQUAL SIGN
interface Point2 {
 x: number;
 y: number;
}

const pt2: Point2 = {x: 345, y: 78}

console.log(pt1);
console.log(pt2);