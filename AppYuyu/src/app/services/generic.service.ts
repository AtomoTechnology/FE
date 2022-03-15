import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IService } from '../Interface/IService';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GenericService implements IService<any, string> {
  private baseUrl = environment.AppUrl;

  constructor(private http: HttpClient, private authService: AuthService) {}

  GetAll(filter: string, ctrl: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl + ctrl}${filter}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authService.getJwtToken(),
      }),
    });
  }

  GetById(id: number, ctrl: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl + ctrl}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authService.getJwtToken(),
      }),
    });
  }

  Post(model: any, ctrl: string): Observable<any> {
    return this.http.post(`${this.baseUrl + ctrl}`, JSON.stringify(model), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authService.getJwtToken(),
      }),
    });
  }

  Put(model: any, ctrl: string) {
    // debugger;
    return this.http.put(
      `${this.baseUrl + ctrl}/${model.id}`,
      JSON.stringify(model),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.authService.getJwtToken(),
        }),
      }
    );
  }
  UpdatePassword(model: any, ctrl: string) {
    try {
      return this.http.put(`${this.baseUrl + ctrl}`, JSON.stringify(model), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': this.authService.getJwtToken(),
        }),
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
    // debugger;
  }

  Delete(id: number, ctrl: string) {
    return this.http.delete(`${this.baseUrl + ctrl}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.authService.getJwtToken(),
      }),
    });
  }
}
