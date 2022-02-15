import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl = environment.AppUrl;

  constructor(private http: HttpClient, private authService : AuthService) {}

  GetAll() {
    // return this.http.get(`${this.baseUrl}roles`).pipe(
    //   tap((data: any) => {
    //     if (data.status) {
    //       console.log(data);
    //     }
    //   }),
    //   catchError((err) => {
    //     console.log(err);
    //     throw err;
    //   })
    //   // mapTo(),
    // );
    
    debugger;
    return this.http.get(`${this.baseUrl}roles`,
    {headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'authorization': this.authService.getJwtToken()})
    })
  }
  GetOne(id: Number) {
    // return this.http.get(`${this.baseUrl}roles/${id}`).pipe(
    //   tap((data: any) => {
    //     if (data.status) {
    //       console.log(data);
    //     }
    //   }),
    //   catchError((err) => {
    //     console.log(err);
    //     throw err;
    //   })
    //   // mapTo(),
    // );
    return this.http.get(`${this.baseUrl}roles/${id}`,
    {headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'authorization': this.authService.getJwtToken()})
    });
  }
  Delete(id: number) {
    return this.http.delete(`${this.baseUrl}roles/${id}`,
    {headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': this.authService.getJwtToken()})
    });
  }
}
