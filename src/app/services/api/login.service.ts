import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LoginResponse } from 'src/app/models/login-response.model';
import { Login } from 'src/app/models/login.model';

import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(data: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/auth/login', data);
  }

}
