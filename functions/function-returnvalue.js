// You can make the return type explicit as shown below
// It is not required though, TS can infer that automatically
function addNums(x, y) {
    return x + y;
}
var sum = addNums(10, 20);
console.log("Sum is " + sum);
var greetings = function (fname, lname) {
    return "Hello " + fname + " " + lname;
};
var msg = greetings("Mike", "Johnson");
console.log(msg);
