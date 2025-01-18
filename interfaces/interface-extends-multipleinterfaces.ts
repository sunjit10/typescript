interface GasolineCar {
 gasTankStorage: number,
 fuelType: string
};

interface ElectricCar {
 batteryCapacity: string
};


interface HybridCar extends GasolineCar, ElectricCar {
  model: string,
  make: number
}

let prius1: HybridCar = {
 model: "Toyota",
 make: 2022,
 gasTankStorage: 15,
 fuelType: "Regular",
 batteryCapacity: "30v"
}

console.log(prius1);
