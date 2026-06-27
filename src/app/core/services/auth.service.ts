import { Injectable, signal } from '@angular/core';

export interface User {
  userId: string;
  userName: string;
  loginStatus: string;
  profilePicture: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSignal = signal<User | null>(null);

  user = this.userSignal.asReadonly();

  setUser(user: User) {
    this.userSignal.set(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | null {
    return this.userSignal();
  }

  clearUser() {
    this.userSignal.set(null);
    localStorage.removeItem('user');
  }

  loadUserFromStorage() {
    const stored = localStorage.getItem('user');
    if (stored) {
      this.userSignal.set(JSON.parse(stored));
    }
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.userSignal.set(null); // if using a signal
  }
}
