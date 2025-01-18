// Using ? to indicate a field is optional

interface personInfo {
 fname: string,
 mname?: string,
 lname: string
}

let person1: personInfo = {fname: 'Mike', lname: 'Johnson'};
let person2: personInfo = {fname: 'Tom', mname: 'J', lname: 'Smith'};

console.log(person1);
console.log(person2);