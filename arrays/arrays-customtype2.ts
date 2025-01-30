type Product = {
 name: string;
 price: number;
};


function getTotal(products: Product[]) :number {
  let sum = 0;
  for (let product of products) {
    sum += product.price;
  }
  return sum;
}

let product1: Product = {name: "A", price:20};
let product2: Product = {name: "B", price:30};


let total = getTotal([product1, product2]);
console.log(total);