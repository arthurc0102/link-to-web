import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  isFieldInvalid(name: string): boolean {
    const field = this.form.get(name);
    return field.invalid && (field.dirty || field.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }

}
