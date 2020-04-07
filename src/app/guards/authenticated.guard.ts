import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.auth.isAuthenticated;

    if (!isAuthenticated) {
      this.snackbar.open('Please login to continue.');
      this.router.navigate(['auth', 'login']);
    }

    return isAuthenticated;
  }

}
