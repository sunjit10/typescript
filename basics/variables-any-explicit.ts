// Avoid this but TS does provide a "any" type where as the name suggests,
// you can assign anything to a variable.

let someVar: any = "hello";

// Since it is "any", you can assign all types of values as shown below
someVar = 10;
someVar = false;

someVar();