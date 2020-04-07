import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(next);
    console.log(state);
    const isAuthenticated = this.auth.isAuthenticated;

    if (isAuthenticated) {
      this.snackbar.open('You had already login.');
      this.router.navigate([environment.loginRedirectUrl]);
    }

    return !isAuthenticated;
  }

}
