// [20, 40, 60, 80] - return a random value like 6 or 4
function getRandomElement<T>(item: T[]): T {
  const index = Math.floor(Math.random() * item.length);
  return item[index];
}

let myRandomNum: number = getRandomElement<number>([20,40,60,80]);
console.log(myRandomNum);

let myRandomStr: string = getRandomElement<string>(["Blue", "Green", "Red", "Yellow"]);
console.log(myRandomStr);