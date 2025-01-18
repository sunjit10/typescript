# Getting Started

Typescript files end with .ts
There are also .tsx files which means typescript plus jsx content (this is when you use react and typescript)


## Compiling

tsc filename.ts

This will compile the typescript file (.ts file) and generate a Javascript (.js) file

### Watch mode
tsc -w filename.ts
or
tsc --watch filename.ts

With the above flags, tsc watches for changes to the file. As soon as you make a change, tsc will recompile with those updates automatically (you don't have to explicitly keep manually recompiling).

### tsc init
You can run tsc --init from the project root folder which will then create a tscconfig.json file. This is the file which has settings where you can customize how tsc operates.

## tsconfig
You can run just tsc in a folder and it will automatically compile all .ts files in that directory. There is a `files` option in tsconfig.json where you can explicitly tell tsc which should compile (everything else will be ignored). Also there is the `includes/excludes` options which can be used to customize this further.

### outDir
By default the .js files are created in the same directory as where the .ts files are located. That can be customized using the `outDir` option with which you can specify another directory where .js files will be located.

### target
By default, you would have "target":"es5" but it can be changed to create for example ES6 compliant JS.


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