import { StatusLS } from './../Interface/statusLocalstorage';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt from 'jwt-decode';
import { mapTo, catchError, tap } from 'rxjs/operators';
import { CryptoService } from '../helpers/crypto';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.AppUrl;
  private statetoke: any;
  constructor(
    private http: HttpClient,
    private encode: CryptoService,
    public jwtHelper: JwtHelperService
  ) {}
  Login(auth: any): Observable<Boolean> {
    return this.http.post<any>(`${this.baseUrl}users/signin`, auth).pipe(
      tap((data) => {
        if (data.status) {
          this.Storagedata(data);
        } else {
          throw data;
        }
      }),
      mapTo(true),
      catchError((err) => {
        throw err;
      })
    );
  }

  Register(data: any): Observable<Boolean> {
    return this.http.post<any>(`${this.baseUrl}users/signup`, data).pipe(
      tap((data) => {
        if (data.status) {
          console.log(data);
        } else {
          throw data;
        }
      }),
      mapTo(true),
      catchError((err) => {
        throw err;
      })
    );
  }

  Storagedata(data: any) {
    let user: any = jwt(data.token);
    localStorage.setItem(StatusLS.userID, this.encode.Encrypt(user.id));
    localStorage.setItem(StatusLS.roleID, this.encode.Encrypt(user.idRole));
    localStorage.setItem(StatusLS.role, this.encode.Encrypt(user.role));
    localStorage.setItem(StatusLS.JWT_TOKEN, this.encode.Encrypt(data.token));
    localStorage.setItem(StatusLS.fullName, this.encode.Encrypt(user.fullName));
  }

  GetDataFromStorage() {
    let userId = this.encode.Decrypt(
      localStorage.getItem(StatusLS.userID) || ''
    );
    const roleId = this.encode.Decrypt(
      localStorage.getItem(StatusLS.roleID) || ''
    );
    const role = this.encode.Decrypt(localStorage.getItem(StatusLS.role) || '');
    const fullName = this.encode.Decrypt(
      localStorage.getItem(StatusLS.fullName) || ''
    );
    return {
      userId,
      role,
      roleId,
      fullName,
    };
  }

  getJwtToken() {
    return this.encode.Decrypt(localStorage.getItem(StatusLS.JWT_TOKEN) || '');
  }

  public isAuthenticated(): boolean {
    let exp = this.jwtHelper.isTokenExpired(this.getJwtToken());
    return !(this.getJwtToken() != null && exp);
  }

  ClearStorage() {
    localStorage.removeItem(StatusLS.userID);
    localStorage.removeItem(StatusLS.roleID);
    localStorage.removeItem(StatusLS.role);
    localStorage.removeItem(StatusLS.fullName);
    localStorage.removeItem(StatusLS.JWT_TOKEN);
  }
  Logout() {
    this.ClearStorage();
  }
}
