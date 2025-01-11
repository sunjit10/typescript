const myNumList = [1, 2, 3];

myNumList.forEach(num => {
  // TS will infer that myNumList has number types and
  // hence you cannot do toUpperCase() on them
  //return num.toUpperCase();		    

  return num*num;
});


const colors = ["red", "white", "blue"];

colors.map(color => {
  // toFixed() works only on number. TS will not allow the line below
  // return color.toFixed();

  return color.toUpperCase();
});