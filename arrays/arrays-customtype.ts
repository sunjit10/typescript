type Point = {
 x: number,
 y: number
}

// somePlace is an array of custom type Point
let somePlace: Point[] = [{x: 20, y:30}, {x: 50, y: 100}];

// push method to insert a new element in the array
somePlace.push({x: 40, y: 80});