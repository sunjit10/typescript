function mergeWithoutConstraints<T, U>(object1: T, object2: U) {
 return {
   ...object1,
   ...object2
  };
}

// When you pass a non-object to ... then it returns an empty object
// ...9 will return {}
// ...true will return {}
let obj1 = mergeWithoutConstraints({name: "circle"}, 9);

// Output will be just {name: 'circle'} and 9 will be ignored
console.log(obj1);



function mergeWithConstraints<T extends object, U extends object>(object1: T, object2: U) {
 return {
   ...object1,
   ...object2
  };
}

// Since both T and U are now defined with "extends object"
// You cannot pass number or boolean. MUST HAVE to pass objects
let obj2 = mergeWithoutConstraints({name: "circle"}, {"radius": 9});
console.log(obj2);
