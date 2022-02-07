import { StatusLS } from './../Interface/statusLocalstorage';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt from 'jwt-decode';
import { mapTo, catchError, tap } from 'rxjs/operators';
import { CryptoService } from '../helpers/crypto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.AppUrl;
  constructor(private http: HttpClient, private encode: CryptoService) {}
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

  Storagedata(data: any) {
    let user: any = jwt(data.token);
    console.log(user.id);
    localStorage.setItem(StatusLS.userID, this.encode.Encrypt(user.id));
    localStorage.setItem(StatusLS.roleID, this.encode.Encrypt(user.idRole));
    localStorage.setItem(StatusLS.role, this.encode.Encrypt(user.role));
  }

  GetDataFromStorage() {
    const userId = localStorage.getItem(StatusLS.userID);
    const roleId = localStorage.getItem(StatusLS.roleID);
    const role = localStorage.getItem(StatusLS.role);
    return {
      userId,
      role,
      roleId,
    };
  }

  ClearStorage() {
    localStorage.removeItem(StatusLS.userID);
    localStorage.removeItem(StatusLS.roleID);
    localStorage.removeItem(StatusLS.role);
  }
  Logout() {}
}
