import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '../../../services/auth.service';
import { LoginService } from '../../../services/api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.spinner.show();

    this.loginService.login(this.form.value)
      .pipe(
        finalize(() => this.spinner.hide()),
        takeUntil(this.destroy$),
      )
      .subscribe(
        token => {
          this.auth.setToken(token);
          this.router.navigate(['shorten']);
        },
        res => {
          this.snackBar.open(res.error.detail);
          this.form.patchValue({ password: '' });
        },
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
