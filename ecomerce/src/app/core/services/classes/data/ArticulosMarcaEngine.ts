import {Injectable} from "@angular/core";
import {HttpMarcasService} from "@core/services/http/http-marcas.service";
import {Observable, Subscription} from "rxjs";
import {Alert} from "@core/services/classes/utils/Alert";

@Injectable({
  providedIn: 'root'
})

export class ArticulosMarcaEngine {
  constructor(
    private httpMarcas: HttpMarcasService,
    private alert:Alert
  ) {
  }

  index(): Observable<any> {
    return this.httpMarcas.read();
  }

  storage(data: FormData): Subscription {
    return this.httpMarcas.create(data).subscribe({
      next:(n)=>{
        this.alert.success(n, 'Exito!')
      },
      error:(e)=>{
        console.log(e.error)
    }
    });
  }

  update(data:FormData, id: number): Subscription {
    return this.httpMarcas.update(data, id).subscribe({
      next:(n)=>{
        this.alert.success(n, 'Exito!')
      },
      error:(e)=>{
        console.log(e.error)
      }
    });
  }

  show(id:number): Observable<any> {
    return this.httpMarcas.get(id);
  }


  delete(): Observable<any> {
    return this.httpMarcas.read();
  }


}
