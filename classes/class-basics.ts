class Person {

   fname: string;
   lname: string;
   
   constructor(fname:string, lname:string) {
     this.fname = fname;
     this.lname = lname;
   }

}


let person1: Person = new Person("James", "Smith");
console.log(person1);