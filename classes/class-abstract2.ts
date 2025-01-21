abstract class Vehicle {
  constructor(public make: string, public year: number) {}

  abstract maxSpeed(): number;

}

class Car extends Vehicle {
      constructor(public make: string,
      		  public year: number,
		  private fuelType: string) {
        super(make, year);
      }

      maxSpeed() {
        return 90;
      }
}

let car1: Car = new Car("Toyota Prius", 2016, "Hybrid");
console.log(car1);
console.log("Max speed of Prius is " + car1.maxSpeed());