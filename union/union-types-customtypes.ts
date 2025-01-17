type Point = {
 x: number;
 y: number;
}

type Loc = {
 lat: number;
 long: number;
}

let whereAmI : Point | Loc;

whereAmI = {x: 30, y: 50};
showMe(whereAmI);

whereAmI = {lat: 100, long: 200};
showMe(whereAmI);

function showMe(me: Point | Loc) {
  console.log(me);
}
