import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/service/product.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-management.html',
  styleUrls: ['./product-management.css']
})
export default class ProductManagement implements OnInit {
  form: FormGroup;
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(1)]],
      quantity: [0, [Validators.required, Validators.min(1)]],
      imageurl: ['', [Validators.required]],
     categoryId: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe(product => {
        this.form.patchValue(product);
      });
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const product: Product = this.form.value as Product;

    if (this.productId) {
      this.productService.updateProduct(this.productId, product).subscribe(() => {
        this.router.navigate(['/admin-panel']);
      });
    } else {
      this.productService.addProduct(product).subscribe(() => {
        this.router.navigate(['/admin-panel']);
      });
    }
  }
}
