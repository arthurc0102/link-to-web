import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.model';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss'],
})
export class ShortenComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private linkService: LinkService,
    private clipboard: ClipboardService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      url: [null, [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  showFieldHint(name: string) {
    const field = this.f[name];
    return field.invalid && (field.dirty || field.touched);
  }

  isShorted(): boolean {
    if (!this.f.url.value) {
      return false;
    }

    return this.f.url.value.startsWith(window.location.origin);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    if (this.isShorted()) {
      this.copy();
      return;
    }

    this.linkService.create({ url: this.form.value.url }).subscribe(
      (link: Link) => {
        this.toastr.success('Link shorten');
        this.f.url.setValue(`${window.location.origin}/${link.code}`);
      },
      (error: HttpErrorResponse) => {
        Object.keys(error.error).forEach((key: string) => {
          this.f[key].setErrors({ errorMessage: error.error[key].join(', ') });
        });
      },
    );
  }

  copy() {
    this.clipboard.copyFromContent(this.f.url.value);
    this.toastr.success('Copied');
  }

}
