# Getting Started

Typescript files end with .ts
There are also .tsx files which means typescript plus jsx content (this is when you use react and typescript)


## Compiling

tsc filename.ts

This will compile the typescript file (.ts file) and generate a Javascript (.js) file


## Variables

let myVar: type = value;

Ex:
let currenTemp: number = 87.2;

For numeric types, there is just number
There are no float, int, double etc

There is a boolean type which can have true or false values


## Type inference
Typescript can infer the type automatically from code when you have not explicitly mentioned/annotated in your code. Typescript will enforce that type going forward to ensure you don't for example assign a number to a string.

let n = 20;
// n = "Hello";

## any type - explicit
let someVar: any = "hello";
someVar = 100;
someVar = false;
someVar();

## any type = implicit
let someVar;

When declared like above, initially it will be of type any

# Functions

## Function default value
function calcSquare(num1: number = 10) {
  return num1*num1;
}


## Function return type
const greetings = (fname: string, lname: string): string => {
      return "Hello " + fname + " " + lname;
}

## 