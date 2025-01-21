function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// This is not what we want. Ex: It can accept a string and return number
function anyIdentity(item: any): any {
  return item;
}

// Generics solves it. It will take a type and return the exact same type
function identity<T>(item: T): T {
  return item;
}

let echo1: string = identity<string>("hello");
console.log(echo1);

let echo2: number = identity<number>(341);
console.log(echo2);

let echo3: boolean = identity<boolean>(true);
console.log(echo3);