interface Product {
 name: string,
 price: number,
 applyDiscount: (discount: number) => number
 // syntax below works too
 //applyDiscount(discount: number): number  
}

let product1: Product = {
 name: 'shoes',
 price: 20,
 applyDiscount(amount: number) {
   let newPrice =  (1 - amount/100) * this.price;
   this.price = newPrice;
   return this.price;
  }
 }

product1.applyDiscount(5); // 5% discount on shoes
console.log(product1);
