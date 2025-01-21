class Person {
    fname: string;
    lname: string;
    private age: number;
    protected hasGraduated: boolean = false;
   
   constructor(fname:string, lname:string) {
     this.fname = fname;
     this.lname = lname;
   }
}

class Employee extends Person {
      hasGraduated = true;
      // age is not accessible here since it is private
      //age = 30;
}

let employee1: Employee = new Employee("James", "Smith");

console.log(employee1);

// line below also works, even though hasGraduated is protected
employee1.hasGraduated = false;

console.log(employee1);