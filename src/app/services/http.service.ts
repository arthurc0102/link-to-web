import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private readonly regExp = new RegExp('(https?|ftp)://');

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: object): Observable<T> {
    return this.http.get<T>(this.buildUrl(url), options);
  }

  post<T>(url: string, data: any, options?: object): Observable<T> {
    return this.http.post<T>(this.buildUrl(url), data, options);
  }

  put<T>(url: string, data: any, options?: object): Observable<T> {
    return this.http.put<T>(this.buildUrl(url), data, options);
  }

  patch<T>(url: string, data: any, options?: object): Observable<T> {
    return this.http.patch<T>(this.buildUrl(url), data, options);
  }

  delete<T>(url: string, options?: object): Observable<T> {
    return this.http.delete<T>(this.buildUrl(url), options);
  }

  buildUrl(path: string): string {
    if (this.regExp.test(path)) {
      return path;
    }

    return environment.baseURL + path;
  }

}
