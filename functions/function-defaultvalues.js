function calcSquare(num1) {
    if (num1 === void 0) { num1 = 10; }
    return num1 * num1;
}
var result = calcSquare();
console.log(result);
result = calcSquare(30);
console.log(result);
function greetings(name) {
    if (name === void 0) { name = "Senor"; }
    return "Greetings ".concat(name);
}
console.log(greetings());
console.log(greetings('James'));
