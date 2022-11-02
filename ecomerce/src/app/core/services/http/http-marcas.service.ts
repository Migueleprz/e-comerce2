import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpMarcasService {

  private readonly url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  read():Observable<any>{
    return this.http.get(`${this.url}marcas`);
  }

  create(data:FormData):Observable<any>{
    return this.http.post(`${this.url}marcas`, data);
  }

  update(data:FormData, id: number):Observable<any>{
    return this.http.post(`${this.url}marcas/${id}`, data);
  }

  delete(id: number):Observable<any>{
    return this.http.delete(`${this.url}marcas/${id}`);
  }

  get(id: number):Observable<any>{
    return this.http.get(`${this.url}marcas/${id}`);
  }


}
