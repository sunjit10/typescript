

function printFullDate(date: Date | string) {
  if (date instanceof Date) {
     console.log("It is a Date object: " + date);
     return date.toUTCString();
  } else {
     console.log("String object: " + date);
     return new Date(date).toUTCString();
  }
}

console.log(printFullDate(new Date()));
console.log(printFullDate("2023-01-20"));
