import { Routes } from '@angular/router';
import { ProductPage } from './pages/product/product-page/product-page';
import { ProductDetails } from './pages/product/product-details/product-details';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';

export const routes: Routes = [
  { path: '', component: ProductPage },
  { path: 'product/:id', component: ProductDetails },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
];
