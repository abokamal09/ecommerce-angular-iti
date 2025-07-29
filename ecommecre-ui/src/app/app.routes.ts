import { Routes } from '@angular/router';
import { ProductPage } from './pages/product/product-page/product-page';
import { ProductDetails } from './pages/product/product-details/product-details';

export const routes: Routes = [
    { path: '', component: ProductPage },
    { path: 'product/:id', component: ProductDetails }
];
