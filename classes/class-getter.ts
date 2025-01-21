class Person {

   fname: string;
   lname: string;
   
   constructor(fname:string, lname:string) {
     this.fname = fname;
     this.lname = lname;
   }

   get fullName(): string {
     return `${this.fname} ${this.lname}`;
   }
}

let person1: Person = new Person("James", "Smith");
console.log(person1.fullName);

// TS will not allow changing below, it that fullName() is a getter 
// person1.fullName = "Nacho Libre";

