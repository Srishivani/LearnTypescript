import {Product} from './product'
export class Cart{
    private products: Product[]=[];

    addProduct(product: Product): void{
        this.products[this.products.length]=product;
    }
    removeProduct(Pid: number): void{
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].id == Pid){
                for(let j=i;j<this.products.length-1;j++){
                    this.products[j]=this.products[j+1];
                }
                this.products.length--;
                break;
            }
        }
    }
    calcTotalPrice(): number{
        let totalPrice = 0;
        for (const product of this.products) {
          totalPrice += product.calcPrice();
        }
        return totalPrice;
    }
    
    displayCartContent(): void {
        let x;
        for (let i = 0; i < this.products.length; i++) {
          const product = this.products[i];
          console.log(`Product: ${product.name}`);
          console.log(`Price: ${product.price}`);
          console.log(`Quantity: ${product.quantity}`);
          console.log("------------------------------");
          x=product.PID;
        }
        console.log("The last PID is: "+x);
        console.log("**********************************");
      }
    }
