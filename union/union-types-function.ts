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


function checkType(obj: string | number | object): void {
  if (typeof obj === "string") {
    console.log("You passed in a string: " + obj);  
  } else if (typeof obj === "object") {
    console.log("You passed in an object: " + obj);
  } else {
    // Already checked for string, object. Here means it is a number
    console.log("You passed in a number: " + obj);
  }
}

checkType("hello");
checkType(100);
checkType({fname: "Mike"});