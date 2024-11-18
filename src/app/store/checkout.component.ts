import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from './order.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  order: any = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    items: [],
    total_price: 0,
  };
  submitted = false;
  orderSent = false;

  constructor(private orderService: OrderService, public cart: Cart) {}

  submitOrder(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      let cartObject: [] = JSON.parse(localStorage.getItem('cart') || '[]');
      this.order.items = cartObject;
      this.order.total_price = cartObject.reduce((sum: number, item: any) => sum + item.product?.price * item.quantity, 0);

      console.log(this.order.total_price);
      this.orderService.submitOrder(this.order).subscribe((response) => {
        if (response.success) {
            this.orderSent = true;
            localStorage.removeItem('cart');
            this.cart.clear();
        } else {
          alert('Order submission failed!');
        }
      });
    }
  }
}


