// You can make the return type explicit as shown below
// It is not required though, TS can infer that automatically

function addNums(x: number, y: number): number {
  return x + y;
}

let sum: number = addNums(10, 20);
console.log("Sum is " + sum);

// Example 2

const greetings = (fname: string, lname: string): string => {
  return "Hello " + fname + " " + lname;
}

let msg: string = greetings("Mike", "Johnson");
console.log(msg);