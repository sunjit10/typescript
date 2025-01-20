class Person {

   fname: string;
   lname: string;

   // variable not initialized here but in constructor (not a constructor param)
   age: number;
   
   // cannot change this from outside since it is readonly
   readonly isEmployable: boolean = true;
   
   constructor(fname:string, lname:string) {
     this.fname = fname;
     this.lname = lname;
     this.age = 30;
   }
}

let person1: Person = new Person("James", "Smith");
console.log(person1);
person1.age = 17;

// cannot change a readonly variable
//person1.isEmployable = false;
console.log(person1);