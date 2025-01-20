/*
Parameter properties saves you from defining class level variables and
then initializing them within the constructor body

As shown below, the entire constructor under OLD WAY is replaced by a
constructor shown under NEW WAY
*/
class Person {
      
   // OLD WAY
   // Without public, you would need to initialize in constructor body
   // and define class variable
   /*
   fname: string;
   lname: string;
   private age: number;
   constructor(fname:string, lname:string, age: number) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
   }
   */

   // NEW WAY
   // Need public parameter property for the constructor below to work
   constructor(public fname:string, public lname:string, private age:number) {
   }
   
   public get fullName() {
     return `${this.fname}  ${this.lname}`;
   }
}

let person1: Person = new Person("James", "Smith", 30);
console.log(person1);