import { Observable } from "rxjs/internal/Observable";

export interface IService<T, controller> {
    GetAll(filter:string, ctrl:controller): Observable<T[]>;
    GetById(id: number, ctrl:controller): Observable<T>;
    Post(model:T, ctrl:controller): Observable<T>;
    Put(model:T , ctrl:controller): Observable<T>;
    Delete(id: number, ctrl:controller): Observable<T>;
}