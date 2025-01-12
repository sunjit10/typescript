function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me`;
}
console.log(twoFer());
console.log(twoFer("Elton"));

const isLeapYear = (year: number): boolean => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
   return true;
  }
  return false;    
}

let leapYear = isLeapYear(2012);
console.log("2012 was a leap year? " + leapYear);

leapYear = isLeapYear(2013);
console.log("2013 was a leap year? " + leapYear);