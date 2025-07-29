import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
interface Category {
  id: number;
  name: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageurl: string;
  CatgoryId: number;
}
@Component({
  selector: 'app-product-page',
  imports: [CommonModule,FormsModule,RouterModule],
  standalone : true,
  templateUrl: './product-page.html',
  styleUrl: './product-page.css'
})

export class ProductPage implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategoryId: number = 0;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get<Category[]>('http://localhost:3000/categories').subscribe(data => {
      this.categories = data;
    });

    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }
  filterProducts(): void {
    if (this.selectedCategoryId === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.CatgoryId === +this.selectedCategoryId);
    }
  }
   selectCategory(id: number): void {
    this.selectedCategoryId = id;
    this.filterProducts();
  }
  getCategoryName(id: number): string {
  if (id === 0) return 'All Categories';
  const cat = this.categories.find(c => c.id === id);
  return cat ? cat.name : '';
}

}
