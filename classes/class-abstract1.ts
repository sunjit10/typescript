abstract class Vehicle {
  constructor(public make: string, public year: number) {}

}

class Car extends Vehicle {
      constructor(public make: string,
      		  public year: number,
		  public fuelType: string) {
        super(make, year);
      }
}


class Truck extends Vehicle {
      constructor(public make: string,
      		  public year: number,
		  public loadCapacity: number) {
      	super(make, year);
      }
}

// Cannot create instance of abstract class
// let vehicle1: Vehicle = new Vehicle("Audi", 2009);

let car1: Car = new Car("VW", 2019, "diesel");
console.log(car1);