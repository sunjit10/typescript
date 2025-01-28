interface Bicycle {
  gears: number;
  color: string;
}

interface MotorCycle {
  fuelType: string;
  color: string;
}

function checkTransport(myCycle: Bicycle | MotorCycle) {
  if ("fuelType" in myCycle) {
     return myCycle + " does Vroom Vroom";
   }
     return myCycle + " is Eco Friendly";
}

console.log(checkTransport({gears: 3, color: "blue"}));
console.log(checkTransport({fuelType: "petrol", color: "grey"}));