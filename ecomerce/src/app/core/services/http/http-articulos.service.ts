import {Injectable} from '@angular/core';
import {IHttpArticulos} from "@core/interfaces/http/IHttpArticulos";
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";
import {MArticulos} from "@core/interfaces/models/mArticulos";

@Injectable({
  providedIn: 'root'
})
export class HttpArticulosService implements IHttpArticulos {

  private readonly url = `${environment.apiUrl}articulos`;

  constructor(
    private http: HttpClient
  ) {
  }

  read(): Observable<MArticulosPaginate> {
    return this.http.get<MArticulosPaginate>(`${this.url}`);
  }

  create(data: FormData): Observable<Object> {
    return this.http.post(`${this.url}`, data);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }

  get(id: number): Observable<MArticulos[]> {
    return this.http.get<MArticulos[]>(`${this.url}/${id}`);
  }

  update(data: FormData, id: number): Observable<Object> {
    return this.http.post(`${this.url}/${id}`, data);
  }


}
