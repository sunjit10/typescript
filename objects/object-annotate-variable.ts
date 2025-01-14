

function printCoordinates(coordinates) {
  console.log(`${coordinates.x} ${coordinates.y}`);
}

let coordinatesOld = {x: 20, y: 40};
printCoordinates(coordinatesOld);

// In TS you can annotate the variable declaration
let coordinatesNew:{x:number; y:number} = {x: 50, y: 100};
printCoordinates(coordinatesNew);




