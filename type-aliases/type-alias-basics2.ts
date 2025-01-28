// You can also use ; after each line instead of commma
type coordinate = {
 x: number;
 y: number;
};

// ABOVE is same as
/*
type coordinate = {
  x: number;
  y: number;
};
*/

let coordinate1: coordinate = {x: 34, y: 2};
console.log(coordinate1);

// A function which returns a Type Alias

function randomCoordinates(): coordinate {
  return {x: Math.random(), y: Math.random()};
}

let coordinate2 = randomCoordinates();
console.log(coordinate2);
