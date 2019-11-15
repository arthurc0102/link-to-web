import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {

  code$: Observable<string>;
  error: HttpErrorResponse = null;

  constructor(
    private linkService: LinkService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.code$ = this.route.params.pipe(
      map((params: Params) => params.code),
      tap((code: string) => this.linkService.search(code).subscribe(
        (link: Link) => {
          window.location.href = link.url;
        },
        (error: HttpErrorResponse) => {
          this.error = error;
          this.spinner.hide();
        },
      )),
    );
  }

}
