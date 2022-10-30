import {Observable} from "rxjs";
import {MAuth} from "@core/interfaces/models/mAuth";

export interface  IAuth{
  login(data: FormData): Observable<MAuth>;
  register(data: FormData): Observable<string>;
  logout(): void;
}
