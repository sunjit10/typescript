// interface allows you to "reopen" it later and add new fields

interface Dog {
name: string;
age: number;
};


// You could get the initial interface from an external API call
// and now you want to add new fields to it
interface Dog {
 breed: string;
 bark: () => string;
};

let myPet: Dog = {
 name: 'Django',
 age: 30,
 breed: 'Golden Retriever',
 bark: () => { return "Woof"; }
};

console.log(myPet);
console.log(myPet.bark());

