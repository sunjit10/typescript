interface Dog {
  breed: string,
  age: number
};


function getInfo<T>(someItem: T): T {
  return someItem;
}

let myDog: Dog  = { breed: "Bulldog", age: 3};
let myDog2: Dog = getInfo(myDog);
console.log(myDog2);

let myDog3: Dog = getInfo({ breed: "German Shepherd", age: 4});
console.log(myDog3);

let myNum: number = getInfo(300);
console.log(myNum);

let someStr: string = getInfo("Matrix");
console.log(someStr);



