// Cannot have duplicate in type, interface allows it

type Person1 = { name: string; }

// Cannot have 2 types with same name
// type Person1 = { age: number; }

interface Person2 { name: string; }

// interface allows it
interface Person2 { age: number; }

// Now Person2 would require BOTH name and age
let person2: Person2 = {name: 'Jack', age: 20 };
console.log(person2);

