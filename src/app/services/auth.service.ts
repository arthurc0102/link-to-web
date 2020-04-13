import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { LocalStorageKey } from '../enums/local-storage-key.enum';
import { LoginResponse } from '../models/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isAuthenticatedSubject$.next(!!this.accessToken);
  }

  setToken(token: LoginResponse) {
    localStorage.setItem(LocalStorageKey.ACCESS, token.access);
    localStorage.setItem(LocalStorageKey.REFRESH, token.refresh);
    this.isAuthenticatedSubject$.next(true);
  }

  cleanToken() {
    localStorage.removeItem(LocalStorageKey.ACCESS);
    localStorage.removeItem(LocalStorageKey.REFRESH);
    this.isAuthenticatedSubject$.next(false);
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject$.getValue();
  }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject$.pipe(shareReplay(1));
  }

  get accessToken(): string | null {
    return localStorage.getItem(LocalStorageKey.ACCESS);
  }

  get refreshToken(): string | null {
    return localStorage.getItem(LocalStorageKey.REFRESH);
  }

}
