import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";
import {Observable, Subscription} from "rxjs";

export interface IArticulos{
  readArticles(): Observable<MArticulosPaginate>;
  storeArticles(data:FormData): Subscription;

    showArticles(id: number): Observable<Object>;
  updateArticles(data:FormData, id: number): Subscription;
  destroyArticles(id: number): Subscription;
}
