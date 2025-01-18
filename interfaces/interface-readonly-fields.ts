// Using readonly identifier to indicate a field cannot be changed

interface personInfo {
 fname: string,
 mname?: string,
 lname: string,
 readonly age: number
}

let person1: personInfo = {fname: 'Mike', lname: 'Johnson', age: 30};

person1.lname = 'Jolly';

// Cannot change age since it tagged as readonly
//person1.age = 40;

console.log(person1);