import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Status, Statuses } from './../Interface/status';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private baseUrl = environment.AppUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  GetAll(): Observable<Statuses> {
    return this.http.get<Statuses>(`${this.baseUrl}status`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
  GetOne(id: Number): Observable<Status> {
    return this.http.get<Status>(`${this.baseUrl}status/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
  Create(data: Status) {
    return this.http.post(`${this.baseUrl}status`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }

  Update(data: Status) {
    return this.http.put(`${this.baseUrl}status/${data.id}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
  Delete(id: number) {
    return this.http.delete(`${this.baseUrl}status/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: this.authService.getJwtToken(),
      }),
    });
  }
}
