// Make it explicit that the function cannot return anything
const returnNothing = (num: number): void => {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
  //return "hello";
}

returnNothing(3);