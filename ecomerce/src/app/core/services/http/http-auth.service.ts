import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {IAuth} from "@core/interfaces/classes/IAuth";
import {Observable} from "rxjs";
import {MAuth} from "@core/interfaces/models/mAuth";

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService implements IAuth{
private readonly url = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  login(data: FormData): Observable<MAuth> {
    return  this.http.post<MAuth>(`${this.url}login`, data);
  }

  logout(): void {
  }

  register(data: FormData): Observable<string> {
    return  this.http.post<string>(`${this.url}register`, data);
  }
}
