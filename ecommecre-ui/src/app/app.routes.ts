import { Routes } from '@angular/router';
import { ProductPage } from './pages/product/product-page/product-page';
import { ProductDetails } from './pages/product/product-details/product-details';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/home/home'; 
import { AdminPanelComponent } from './pages/auth/admin-panel/admin-panel'; 
import ProductManagement from './pages/product/product-management/product-management';

export const routes: Routes = [
  { path: 'Home', component: Home },
  { path: 'product-page', component: ProductPage },
  { path: 'product/:id', component: ProductDetails },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'product-management', component: ProductManagement },
  { path: 'product-management/:id', component: ProductManagement },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];
