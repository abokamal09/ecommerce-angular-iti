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
  categoryId: number;
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
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 8;
  paginatedProducts: Product[] = [];

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get<Category[]>('http://localhost:3000/categories').subscribe(data => {
      this.categories = data;
    });

    this.http.get<Product[]>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
      this.updatePaginatedProducts();
    });
  }
  filterProducts(): void {
  const categoryFiltered = this.selectedCategoryId === 0
    ? this.products
    : this.products.filter(p => p.categoryId === +this.selectedCategoryId);

    const term = this.searchTerm.toLowerCase().trim();
    this.filteredProducts = categoryFiltered.filter(p =>
    p.name.toLowerCase().includes(term)
  );
  this.currentPage = 1; 
  this.updatePaginatedProducts(); 
}
updatePaginatedProducts(): void {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
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
goToPage(page: number): void {
  this.currentPage = page;
  this.updatePaginatedProducts();
}

get totalPages(): number[] {
  const total = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  return Array.from({ length: total }, (_, i) => i + 1);
}

}
