function checkTripleEquals(n1: any, n2: any): void {
 if (n1 === n2) {
   console.log(n1 + " === " + n2);
 } else {
   console.log(n1 + " IS NOT === " + n2);
 }
}

function checkDoubleEquals(n1: any, n2: any): void {
 if (n1 == n2) {
   console.log(n1 + " == " + n2);
 } else {
   console.log(n1 + " IS NOT == " + n2);
 }
}


checkTripleEquals(10, "10"); // This will be false
checkTripleEquals(20, 20);
checkTripleEquals(true, "true"); // This will be false
checkTripleEquals("a", "A");

checkDoubleEquals(30, "30"); // This will be true
checkDoubleEquals(40, 40);
checkDoubleEquals(false, "false"); // This will be false
checkDoubleEquals("b", "B");

