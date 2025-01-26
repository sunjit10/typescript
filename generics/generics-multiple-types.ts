// Without generics, the type will be any
function mergeWithoutGenerics(object1, object2) {
 return {
   ...object1,
   ...object2
  };
}

let obj1 =
mergeWithoutGenerics({name: "triangle"}, {colors: ["blue", "white"]});

console.log(obj1);


function mergeWithGenerics<T, U>(object1: T, object2: U) {
 return {
   ...object1,
   ...object2
  };
}

let obj2 =
mergeWithGenerics({name: "circle"}, {colors: ["grey", "black"]});
console.log(obj2);

                                 