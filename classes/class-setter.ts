class Person {

    fname: string;
    lname: string;
    hasGraduated: boolean = false;
   
   constructor(fname:string, lname:string) {
     this.fname = fname;
     this.lname = lname;
   }

   get fullName(): string {	
     return `${this.fname} ${this.lname}`;
   } 

   // Not allowed to have :void at the end
   // set graduateSchool(graduate: boolean) :void
   set graduateSchool(graduate: boolean) {
     this.hasGraduated = graduate;
   }
}

let person1: Person = new Person("James", "Smith");
console.log(person1.fullName);

// this will not work:  person1.graduateSchool(true)
person1.graduateSchool = true;

// TS will not allow changing below, it that fullName() is a getter 
// person1.fullName = "Nacho Libre";
