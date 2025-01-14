// Here we specify the return type for a function

function randomCoordinate(): {x: number; y: number} {
	 return {x: Math.random(), y: Math.random()};
}

let coordinates = randomCoordinate();
console.log(coordinates);