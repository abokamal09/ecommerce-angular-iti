import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageurl: string;
  CatgoryId: number;
}
@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{
  product: Product | null = null;
  selectedQuantity: number = 1;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => {
      this.product = data.find(p => p.id === productId) || null;
    });
  }
  increaseQuantity(): void {
    if (this.product && this.selectedQuantity < this.product.quantity) {
      this.selectedQuantity++;
    }
  }

  decreaseQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }
  addToCart():void{

  }
}
