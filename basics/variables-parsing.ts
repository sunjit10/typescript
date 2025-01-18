let price: string = "$45.33";

function getNumericPrice(price: string): number {
  return parseFloat(price.replace("$", ""));
}

let actualPrice: number = getNumericPrice(price);
console.log(actualPrice);