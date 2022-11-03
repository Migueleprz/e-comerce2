import {Observable, Subscription} from "rxjs";

export interface IHttpArticulos {

  read(): Observable<any>;

  create(data: FormData): Observable<Object>;

  update(data: FormData, id: number): Observable<Object>;

  get(id: number): Observable<Object>;

  delete(id: number): Observable<Object>;


}
