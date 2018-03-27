import { Product } from './product.entity';

export class FoodOrder {
    public products: Product[] = [];
    public orderDate: Date;
    public userId: string;

    constructor(orderDate: Date, userId: string, products?: Product[]) {
        this.orderDate = orderDate;
        this.userId = userId;
        if (products) {
            this.products = products;
        }
    }

    public addProduct(product: Product) {
        this.products.push(product);
    }
}
