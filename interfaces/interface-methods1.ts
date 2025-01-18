// Example below shows 2 different syntax to have a method in interface
// syntax1:  methodName: () => returnDataType
// syntax2:  methodName(): returnDataType

interface personInfo {
 fname: string,
 mname?: string,
 lname: string,
 readonly age: number,
 sayHi: () => string,  // method, no input parameter and returns String
 sayHello(): string // alternate syntax to define method
}

let person1: personInfo = {fname: 'Jim', lname: 'Tan', age: 40,
sayHi: () => { return 'Howdy'},
sayHello: () => { return 'Hola'}
};
console.log(person1);


