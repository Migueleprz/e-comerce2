import { Injectable } from '@angular/core';
import {IHttpArticulos} from "@core/interfaces/http/IHttpArticulos";
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";

@Injectable({
  providedIn: 'root'
})
export class HttpArticulosService implements IHttpArticulos{

  private readonly url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  read(): Observable<MArticulosPaginate> {
    return this.http.get<MArticulosPaginate>(`${this.url}articulos`);
  }
}
