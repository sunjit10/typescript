interface Colorful {
  color: string;
}

interface DriveType {
  drivePower(): void;
}

class Car implements Colorful, DriveType {
  constructor(public carMake: string, public color: string) {}

  drivePower() {
    console.log("v6");
  }

}

let car1: Car = new Car("Honda", "Black");
console.log(car1);
car1.drivePower();