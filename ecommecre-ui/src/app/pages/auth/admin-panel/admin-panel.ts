import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/service/product.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './admin-panel.html',
})
export class AdminPanelComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchText: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.filteredProducts = res;
    });
  }

  deleteProduct(id: string) {
    // Soft delete (frontend only)
    this.products = this.products.filter(p => p.id !== id);
    this.filteredProducts = this.filteredProducts.filter(p => p.id !== id);
  }

  editProduct(id: string) {
    this.router.navigate(['/product-management', id]);
  }

  addProduct() {
    this.router.navigate(['/product-management']);
  }

  search() {
    const term = this.searchText.toLowerCase();
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.id.toString().includes(term) ||
      p.categoryId.toString().includes(term)
    );
  }
}
