import {Component, OnInit} from '@angular/core';
import {CartItem} from '../../core/models/CartItem';
import {CartService} from '../../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {

  cartItems: CartItem[] = [];
  shippingCost = 90;

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  get subtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get total(): number {
    return this.subtotal + this.shippingCost;
  }

  completeOrder() {
    alert('Complete order was successfully!');
    this.router.navigate(['/']);
  }
}
