export function add(x: number, y: number) :number {
  return x + y;
}

export function getRandomElem<T>(vals: T[]): T {
   return vals[Math.floor(Math.random() * vals.length)];
}