import { Injectable } from '@angular/core';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../interface/auth.model';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': environment.apiKey,
  });
  constructor(private http:HttpClient) { }

  loginApi(payload: LoginRequest) {
    return this.http.post<LoginResponse> (environment.loginApi, payload, { headers: this.header })
  }
  
  registerApi(payload: RegisterRequest) {
    return this.http.post<RegisterResponse> (environment.registerApi, payload, { headers: this.header })
  }
  
}
