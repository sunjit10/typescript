type coordinate = {
 x: number;
 y: number;
};

function randomCoordinates(): coordinate {
  return {x: Math.random(), y: Math.random()};
}

let coordinate1: coordinate = {x: 34, y: 2};
console.log(coordinate1);

let coordinate2 = randomCoordinates();
console.log(coordinate2);
