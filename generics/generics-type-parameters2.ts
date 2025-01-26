interface Lengthy {
  length: number;
}

function printDoubleValue<T extends Lengthy>(item: T) {
  return item.length * 2;
}

console.log(printDoubleValue("hello"));

// Will not work since 23 is a raw number
//console.log(printDoubleValue(23));


