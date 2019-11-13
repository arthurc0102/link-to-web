import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

import { Link } from '../models/link.model';

@Injectable({
  providedIn: 'root',
})
export class LinkService {

  constructor(private http: HttpService) { }

  create(data: any): Observable<Link> {
    return this.http.post<Link>(`/links/links`, data);
  }

  search(code: string): Observable<Link> {
    return this.http.get<Link>(`/links/links/s/${code}`);
  }

}
