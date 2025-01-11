function calcSquare(num: number) {
  return num*num;
}

console.log(calcSquare(5));
console.log(calcSquare(10));

// Cannot do below since TS checks for number
//console.log(calcSquare("hey"));


// Example 2
function sayHello(somePerson: string) {
  return `Howdy ${somePerson}`;
}

console.log(sayHello("Mike"));
//console.log(sayHello(true));


// Example 3
const encourageStudent = (name: string) => {
 return `Hey, ${name}, you're doing GREAT!`;	
}	

console.log(encourageStudent('jamie'));

// TS will ensure you can only call function with String parameter
//console.log(encourageStudent(100));

