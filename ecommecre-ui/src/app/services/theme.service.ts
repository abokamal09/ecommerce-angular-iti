import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>(this.getInitialTheme());
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
  }

  private getInitialTheme(): Theme {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }
    
    // Check user's system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to dark theme
    return 'dark';
  }

  toggleTheme() {
    const newTheme: Theme = this.themeSubject.value === 'dark' ? 'light' : 'dark';
    this.themeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme(newTheme);
  }

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: Theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }
}
