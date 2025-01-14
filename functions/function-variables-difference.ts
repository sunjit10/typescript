function printInfo(person: {firstName: string; lastName: string}) {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
}

// TS will not allow the line below because it has age
// printInfo({firstName: 'Jolly', lastName: 'Molly', age: 25});

// Strange that it does allow the call below when defined as a variable
let person1 = {firstName: 'Jim', lastName: 'Smith', age: 30, isRetired: false};
printInfo(person1);



