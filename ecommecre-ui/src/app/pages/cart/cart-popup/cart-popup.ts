import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-popup',
  imports: [
    NgIf
  ],
  templateUrl: './cart-popup.html',
  styleUrl: './cart-popup.css'
})
export class CartPopup {

  @Input() itemName: string = '';
  @Input() itemPrice: number = 0;
  @Input() imageUrl: string = '';
  @Input() cartCount: number = 0;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(private router: Router) {}

  closePopup() {
    this.show = false;
  }

  goToCart() {
    this.close.emit();
    this.router.navigate(['/cart']);
  }

  goToCheckout() {
    this.close.emit();
    this.router.navigate(['/checkout']);
  }
}
