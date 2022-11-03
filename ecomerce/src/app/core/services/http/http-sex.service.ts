import { Injectable } from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpSexService {
  private readonly url = `${environment.apiUrl}sex`;
  constructor(
    private http: HttpClient
  ) { }

  read():Observable<any>{
    return this.http.get(`${this.url}`);
  }
}
