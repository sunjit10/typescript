type Name = {
 fname: string,
 lname: string
}

// Person type extends Name type
type Person = Name & {
 age: number;
}

let person1: Person = {
  fname: 'Mike',
  lname: 'Smith',
  age: 30
}

console.log(person1);