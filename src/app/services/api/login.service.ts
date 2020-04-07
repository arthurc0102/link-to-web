import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpService } from '../http.service';

import { Login } from '../../models/login.model';
import { LoginResponse } from '../../models/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(data: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/auth/login', data);
  }

}
