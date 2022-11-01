import { Injectable } from "@angular/core";
import {IArticulos} from "@core/interfaces/classes/IArticulos";
import {HttpArticulosService} from "@core/services/http/http-articulos.service";
import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ArticulosEngine implements IArticulos{
  constructor(
    private httpArticle:HttpArticulosService
  ) {
  }

  readArticles(): Observable<MArticulosPaginate> {
    return this.httpArticle.read();
  }


}
