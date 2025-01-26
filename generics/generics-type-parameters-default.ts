function makeEmptyArray<T>(): T[] {
  return [];
}

// array1 will be of type unknown[]
let array1 = makeEmptyArray();


function makeEmptyArrayWithDefaultType<T = number>(): T[] {
  return [];
}

// array1 will be of type number
let array2 = makeEmptyArrayWithDefaultType();
// cannot push a string since now default type is number
// array2.push("hello");
array2.push(30);

// Now I am overriding by explicitly providing default type
let array3 = makeEmptyArrayWithDefaultType<string>();
array3.push("hi");



