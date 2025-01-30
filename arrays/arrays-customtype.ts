type MyLocation = {
 lat: number,
 long: number
}

// somePlace is an array of custom type MyLocation
let somePlace: MyLocation[] = [{lat: 20.78, long:30.12}, 
                               {lat: 50.67, long: 78.22}];

// push method to insert a new element in the array
somePlace.push({lat: 40.677, long: 80.223});

// Display the values of array

for (let location of somePlace) {
    console.log(location);
}