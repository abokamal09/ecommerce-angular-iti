import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  currentTheme$: Observable<'light' | 'dark'>;

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.currentTheme$ = this.themeService.theme$;
  }

  goToProducts() {
    this.router.navigate(['/product-page']);
  }
}
