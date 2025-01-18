// tuples don't exist in JS
// they are arrays of fixed length and strict with the order

let myStuff: [number, string];

myStuff = [20, "hello"];

//myStuff = ["hi", 30];


// Without tuple, the array below can have unlimited Strings
let colors: string[] = [];
colors = ["red"];
colors = ["red", "white"];

// With tuple, I can force it to be a array of 3 colors
let colors2: [string, string, string];
colors2 = ["red", "green", "blue"];


// This will not work
//colors2 = ["red", "green"];