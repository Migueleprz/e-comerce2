import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";
import {Observable} from "rxjs";

export interface IArticulos{
  readArticles(): Observable<MArticulosPaginate>;
}
