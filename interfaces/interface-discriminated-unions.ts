// Here, each interface initially had 3 properties: name, weight, age
// and the issue would be that how would a function distinguish between them
// To solve that: a Field called kind (can be anything like type, __type
// __typename can be added which is unique value for each interface

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch(animal.kind) {
    case("pig"): return "Oink";
    case("cow"): return "Moo";
    case("rooster"): return "Yoodle";
  }
}

console.log(getFarmAnimalSound({name: "rooster1", weight:20, age:5, kind:"rooster"}));

console.log(getFarmAnimalSound({name: "cow1", weight:150, age:15, kind:"cow"}));

console.log(getFarmAnimalSound({name: "pig1", weight:70, age:8, kind:"pig"}));