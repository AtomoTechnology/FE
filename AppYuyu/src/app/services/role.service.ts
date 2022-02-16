import { Role, Roles } from './../Interface/roles';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl = environment.AppUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  GetAll(): Observable<Roles> {
    return this.http.get<Roles>(`${this.baseUrl}roles`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
  GetOne(id: Number): Observable<Role> {
    return this.http.get<Role>(`${this.baseUrl}roles/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
  Create(data: Role) {
    return this.http.post(`${this.baseUrl}roles`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }

  Update(data: Role) {
    return this.http.put(`${this.baseUrl}roles/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
  Delete(id: number) {
    return this.http.delete(`${this.baseUrl}roles/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
}
