let flagColors: string[] = ["red", "white", "blue"];

function printFlagColors(colors: string[]) {

   let i = 0;
   while (i < colors.length) {
     let color = colors[i];
     switch (color) {
       case("red"): console.log("red"); break;
       case("white"): console.log("white"); break;
       case("blue"): console.log("blue"); break;
     }

     i++;
   }
  
}

printFlagColors(flagColors);
