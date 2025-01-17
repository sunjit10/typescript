// If a variable can be a mixture two different array types
// Syntax:  let stuff: (type1 | type2)[]

let stuff: (number | string)[];

stuff = [10, 30, "hello", 50, "hi"];

console.log(stuff);

// For EITHER a Number Array or a String array

let stuff2: number[] | string[];
stuff2 = [10,30,40];
console.log(stuff2);

stuff2 = ["hi", "hello"];
console.log(stuff2);



