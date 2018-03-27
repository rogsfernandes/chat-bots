"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FoodOrder {
    constructor(orderDate, userId, products) {
        this.products = [];
        this.orderDate = orderDate;
        this.userId = userId;
        if (products) {
            this.products = products;
        }
    }
    addProduct(product) {
        this.products.push(product);
    }
}
exports.FoodOrder = FoodOrder;
