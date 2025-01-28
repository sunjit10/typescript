interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// Predicate Syntax:  <parameterName> is <Type>
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

console.log(isCat({name: "Perkins", numLives: 3}));
console.log(isCat({name: "Django", breed: "Bulldog"}));