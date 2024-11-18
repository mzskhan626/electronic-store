import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
    templateUrl: 'product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    product?: Product;

    constructor(
        private repository: ProductRepository,
        private route: ActivatedRoute,
        private cart: Cart
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        this.product = this.repository.getProduct(id);
    }

    addToCart(product: Product): void {
        this.cart.addLine(product);
    }
}
