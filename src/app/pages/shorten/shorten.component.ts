import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.model';

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

  isFieldInvalid(name: string) {
    const field = this.form.get(name);
    return field.invalid && (field.dirty || field.touched);
  }

  isShorted(): boolean {
    if (!this.form.get('url').value) {
      return false;
    }

    return this.form.get('url').value.startsWith(window.location.origin);
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
        this.form.get('url').setValue(`${window.location.origin}/${link.code}`);
      },
      (error: HttpErrorResponse) => {
        if (error.status !== 400) {
          this.toastr.error(error.message);
          return;
        }

        Object.keys(error.error).forEach((key: string) => {
          this.form.get(key).setErrors({ errorMessage: error.error[key].join(', ') });
        });
      },
    );
  }

  copy() {
    this.clipboard.copyFromContent(this.form.get('url').value);
    this.toastr.success('Copied');
  }

}
