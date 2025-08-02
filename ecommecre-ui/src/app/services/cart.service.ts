import { Injectable } from '@angular/core';
import {CartItem} from '../core/models/CartItem';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];
  private cartItems = new BehaviorSubject<string[]>([]);
  cartItems$ = this.cartItems.asObservable();

  getItems() {
    return this.items;
  }

  addItem(item: CartItem) {
    const existing = this.items.find(i => i.name === item.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  increase(index: number) {
    this.items[index].quantity++;
  }

  decrease(index: number) {
    if (this.items[index].quantity > 1) {
      this.items[index].quantity--;
    }
  }

  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }
}
