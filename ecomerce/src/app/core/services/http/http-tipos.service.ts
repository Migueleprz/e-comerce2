import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpTiposService {

  private readonly url = `${environment.apiUrl}tipos`;
  constructor(
    private http: HttpClient
  ) { }

  read():Observable<any>{
    return this.http.get(`${this.url}`);
  }

  create(data:FormData):Observable<any>{
    return this.http.post(`${this.url}`, data);
  }

  update(data:FormData, id: number):Observable<any>{
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id: number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

  get(id: number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
}
