import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IUser | null> {
    return this.http
      .get<IUser[]>(`${this.apiURL}?email=${email}&password=${password}`)
      .pipe(map((users) => (users.length ? users[0] : null)));
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getCurrentUser(): IUser | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  registerUser(user: Omit<IUser, 'id'>) {
    return this.http.post<IUser>('http://localhost:3000/users', user);
  }
}
