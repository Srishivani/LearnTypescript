import {Product} from './product'
import {Cart} from './cart'
const cart = new Cart();
let product1 = new Product({id:1,name:'Apple',price:18,quantity:8});
let product2 = new Product({id:2,name:'Banana',price:8,quantity:12});
let product3 = new Product({id:3,name:'Canned Peaches',price:275,quantity:2});
let product4 = new Product({id:4,name:'Chips',price:20,quantity:3});
let product5 = new Product({id:5,name:'Shirts',price:449,quantity:4});
product1.PID='Sl1';
product2.PID='Sl1';
product3.PID='Sl1';
product4.PID='Sl1';
product5.PID='Sl1';
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);
cart.addProduct(product5);
cart.displayCartContent();
console.log("Total Price "+cart.calcTotalPrice());
cart.removeProduct(3);
cart.displayCartContent();
console.log("Total Price "+cart.calcTotalPrice());
product3 = new Product({id:3,name:'Socks',price:175,quantity:3});
cart.addProduct(product3);
cart.displayCartContent();