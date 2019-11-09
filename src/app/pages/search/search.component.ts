import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private linkService: LinkService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      code: [null, [Validators.required]],
    });
  }

  get f(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  showFieldHint(name: string) {
    const field = this.f[name];
    return field.invalid && (field.dirty || field.touched);
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.linkService.search(this.form.value.code)
      .subscribe(
        this.redirect,
      );
  }

  redirect(link: Link) {
    window.location.href = link.url;
  }

}
