import {Injectable} from "@angular/core";
import {HttpTiposService} from "@core/services/http/http-tipos.service";
import {Alert} from "@core/services/classes/utils/Alert";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn:'root'
})

export class ArticulosTipoEngine{
  constructor(
    private httpTipos: HttpTiposService,
    private alert:Alert
  ) {
  }

  index(): Observable<any> {
    return this.httpTipos.read();
  }

  storage(data: FormData): Subscription {
    return this.httpTipos.create(data).subscribe({
      next:(n)=>{
        this.alert.success(n, 'Exito!')
      },
      error:(e)=>{
        console.log(e.error)
      }
    });
  }

  update(data:FormData, id: number): Subscription {
    return this.httpTipos.update(data, id).subscribe({
      next:(n)=>{
        this.alert.success(n, 'Exito!')
      },
      error:(e)=>{
        console.log(e.error)
      }
    });
  }

  show(id:number): Observable<any> {
    return this.httpTipos.get(id);
  }

  delete(id:number): Observable<any> {
    return this.httpTipos.delete(id);
  }

}
