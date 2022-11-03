import { Injectable } from "@angular/core";
import {IArticulos} from "@core/interfaces/classes/IArticulos";
import {HttpArticulosService} from "@core/services/http/http-articulos.service";
import {MArticulosPaginate} from "@core/interfaces/models/mArticulosPaginate";
import {Observable, Subscription} from "rxjs";

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

  destroyArticles(id: number): Subscription {
   return  this.httpArticle.delete(id).subscribe({
      next:(n)=>{
        console.log(n)
      },
      error:(e)=>{
        console.log(e)
      }
    });
  }

  showArticles(id: number): Observable<Object> {
   return  this.httpArticle.get(id);
  }

  storeArticles(data: FormData): Subscription{
   return this.httpArticle.create(data).subscribe({
      next:(n)=>{
        console.log(n)
      },
      error:(e)=>{
        console.log(e)
      }
    });
  }

  updateArticles(data: FormData, id: number): Subscription{
  return  this.httpArticle.update(data,id).subscribe({
      next:(n)=>{
        console.log(n)
      },
      error:(e)=>{
        console.log(e)
      }
    });
  }




}
