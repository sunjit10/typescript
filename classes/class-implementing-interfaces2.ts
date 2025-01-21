interface Colorful {
  color: string;
}

// Using parameter properties, we don't have to initialize color
// and rather provide it later when creating the object
class Rainbow implements Colorful {
  constructor(public color: string) {}
}

let rainbow1:Rainbow = new Rainbow("violet");
console.log(rainbow1);


class Car implements Colorful {
  color = "Silver";
  constructor(public carMake: string) {}
}

let car1: Car = new Car("Honda");
console.log(car1);