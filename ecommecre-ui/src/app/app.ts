import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductPage } from './pages/product/product-page/product-page';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ProductPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommecre-final-iti');
}
