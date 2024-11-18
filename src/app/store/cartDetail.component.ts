import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
    cartItemsString: string = "";
    constructor(public cart: Cart, private router: Router) { 
        this.cartItemsString = JSON.stringify(this.cart.lines());
    }

    proceedToCheckout() {
        console.log("cart", this.cartItemsString);
        localStorage.setItem("cart", this.cartItemsString);
        this.router.navigateByUrl("/checkout");
    }
}