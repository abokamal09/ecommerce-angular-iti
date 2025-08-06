import { Routes } from '@angular/router';
import { ProductPage } from './pages/product/product-page/product-page';
import { ProductDetails } from './pages/product/product-details/product-details';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/home/home';
import { AdminPanelComponent } from './pages/auth/admin-panel/admin-panel';
import ProductManagement from './pages/product/product-management/product-management';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';
import { Notfound } from './shared/notfound/notfound';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'product-page', component: ProductPage },
  { path: 'product/:id', component: ProductDetails },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'product-management',
    component: ProductManagement,
    canActivate: [adminGuard],
  },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout, canActivate: [authGuard] },
  {
    path: 'product-management/:id',
    component: ProductManagement,
    canActivate: [adminGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Notfound },
];
