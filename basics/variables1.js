var pi = 3.14159;
console.log("Hello");
console.log(Math.round(pi));
// Since it is defined as const, you cannot assign to a different value
// pi = 5.555;
var currentWeather = 'Winter';
// Typescript will ensure that you cannot assign number to a String
//currentWeather = 39.1;
var currentTemp = 37.2;
console.log("It is " + currentWeather + " and the temp is " + currentTemp);
var isItCold = true;
if (isItCold) {
    console.log("Enough of " + currentWeather.toUpperCase() + "!!!");
}
