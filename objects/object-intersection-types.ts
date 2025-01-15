// Use the & to "join" two types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const myObject: ColorfulCircle = {
  radius: 4,
  color: "yellow"
};

function printCircle(myColorfulCircle: ColorfulCircle) {
  console.log(`My Circle is colored ${myColorfulCircle.color} and has radius of ${myColorfulCircle.radius}`);
}

printCircle(myObject);