interface Colorful {
  color: string;
}

interface Smells {
  niceSmell: boolean;
  smellType: string;
}

class Rainbow implements Colorful {
  color: "violet";
}

class Flowers implements Colorful, Smells {
  color: "yellow";
  niceSmell: true;
  smellType: "peachy";
}


