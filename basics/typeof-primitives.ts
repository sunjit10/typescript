function triple(val: number | string) {
   if (typeof val === "number") {
     return val * 3;
   }
   return val + val + val;
}

console.log(triple(5));
console.log(triple('hi'));