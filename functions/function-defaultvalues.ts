function calcSquare(num1: number = 10) {
  return num1*num1;
}

let result = calcSquare();
console.log(result);

result = calcSquare(30);
console.log(result);


function greetings(name: string = "Senor") {
 return `Greetings ${name}`;
}

console.log(greetings());
console.log(greetings('James'));