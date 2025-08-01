import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  currentTheme: Theme = 'dark';
  
  constructor(private themeService: ThemeService) {}
  
  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
