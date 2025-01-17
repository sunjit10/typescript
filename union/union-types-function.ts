// function accepting union type parameter: number and string

const guessAge = (age: number | string) => {
  return "Your age is: " + age;
}

let age1 = guessAge(30);
let age2 = guessAge("25");
console.log(age1);
console.log(age2);

// Cannot pass any other datatype like boolean or objects
//guessAge(true);
//guessAge({age: 20});
