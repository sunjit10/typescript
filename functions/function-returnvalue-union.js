// Use the | to indicate if a function can return multiple different types
// In the example below, it can return a number or string
function somethingRandom(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var randomValue = somethingRandom(10);
console.log(randomValue);
