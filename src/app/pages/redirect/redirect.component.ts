import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { LinkService } from '../../services/link.service';
import { Link } from '../../models/link.model';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {

  code$: Observable<string>;

  constructor(
    private toastr: ToastrService,
    private linkService: LinkService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.code$ = this.route.params.pipe(
      map((params: Params) => params.code),
      tap((code: string) => this.linkService.search(code).subscribe(this.redirect, console.log)),
    );
  }

  redirect(link: Link) {
    window.location.href = link.url;
  }

}
