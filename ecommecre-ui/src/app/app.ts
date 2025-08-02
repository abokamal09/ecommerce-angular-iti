import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPage } from './pages/product/product-page/product-page';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";
import {CartService} from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommecre-final-iti');
}
