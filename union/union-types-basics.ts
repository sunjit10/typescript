// Variable declaration using union type

let zipCode: number | string = "78759";
console.log(zipCode);
zipCode = 78220;
console.log(zipCode);
//zipCode = true;

let zipCode2: number | string | object = {zip: 78711};
zipCode2 = "78722";
zipCode2 = 78611;


