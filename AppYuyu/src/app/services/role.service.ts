import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl = environment.AppUrl;

  constructor(private http: HttpClient) {}

  GetAll() {
    return this.http.get(`${this.baseUrl}roles`).pipe(
      tap((data: any) => {
        if (data.status) {
          console.log(data);
        }
      }),
      catchError((err) => {
        console.log(err);
        throw err;
      })
      // mapTo(),
    );
  }
  GetOne(id: Number) {
    return this.http.get(`${this.baseUrl}roles/${id}`).pipe(
      tap((data: any) => {
        if (data.status) {
          console.log(data);
        }
      }),
      catchError((err) => {
        console.log(err);
        throw err;
      })
      // mapTo(),
    );
  }
}
