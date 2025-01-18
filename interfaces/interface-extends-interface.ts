interface Car {
 model: string,
 make: number;
};

// I could do: interface Car again and define 2 new properties
// and it would still work. Here we are defining a new type called RaceCar
interface RaceCar extends Car {
  rpm: number,
  engine: "V6" | "V8" | "V10"
}

let ferrari1: RaceCar = {
 model: "Ferrari",
 make: 2021,
 rpm: 200,
 engine: "V8"
}

console.log(ferrari1);
