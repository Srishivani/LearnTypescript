import {ProductInfo} from './produtil'
export class Product implements ProductInfo {
    id: number;
    name: string;
    price: number;
    quantity: number;
    pid?: string;
    constructor(product:ProductInfo){
        this.id=product.id;
        this.name=product.name;
        this.price=product.price;
        this.quantity=product.quantity;
        this.pid=product.pid;
    }
    calcPrice(): number{
        return this.quantity*this.price;
    }
    set PID(value :string){
        this.pid=value;
    }

    get PID(): any{
        return this.pid;
    }
}