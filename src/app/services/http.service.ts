import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  server = environment.baseURL;

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: object): Observable<T> {
    return this.http.get<T>(this.server + url, options);
  }

  post<T>(url: string, data: any, options?: object): Observable<T> {
    return this.http.post<T>(this.server + url, data, options);
  }

  put<T>(url: string, data: any, options?: object): Observable<T> {
    return this.http.put<T>(this.server + url, data, options);
  }

  patch<T>(url: string, data: any, options?: object): Observable<T> {
    return this.http.patch<T>(this.server + url, data, options);
  }

  delete<T>(url: string, options?: object): Observable<T> {
    return this.http.delete<T>(this.server + url, options);
  }

}
