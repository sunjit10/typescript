let animal: object = {breed: "mammal", age: 2};
let human: object = {gender: "male", age: 30};

function checkType(x: object) {
 if ("breed" in x) {
    console.log(x + " is an animal");
  }

  if ("gender" in x) {
    console.log(x + " is a human");
  }

}

checkType(animal);
checkType(human);