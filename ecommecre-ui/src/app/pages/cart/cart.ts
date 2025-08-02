import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {NgForOf} from '@angular/common';
import {CartItem} from '../../core/models/CartItem';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [
    NgForOf
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  items: CartItem[] = [];

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  increase(i: number) {
    this.cartService.increase(i);
  }

  decrease(i: number) {
    this.cartService.decrease(i);
  }

  remove(i: number) {
    this.cartService.removeItem(i);
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
