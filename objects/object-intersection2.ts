type street = {
 streetName: string;
}

type city = {
 cityName: string;
}

type zip = {
  zipCode: number;
}

// Can be Dynamic with state: string defined right now
// and combined with 3 predefined type objects
type address = street & city & zip & { state: string; };

let address1: address = {streetName: "Parmer Ln", cityName: "Austin", zipCode: 78729, state: "TX"};

console.log(address1);