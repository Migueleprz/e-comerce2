import {Observable, Subscription} from "rxjs";
import {MArticulos} from "@core/interfaces/models/mArticulos";

export interface IHttpArticulos {

  read(): Observable<any>;

  create(data: FormData): Observable<Object>;

  update(data: FormData, id: number): Observable<Object>;

  get(id: number): Observable<MArticulos[]>;

  delete(id: number): Observable<Object>;


}
