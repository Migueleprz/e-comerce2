import {Injectable} from "@angular/core";
import {HttpTallasService} from "@core/services/http/http-tallas.service";
import {Alert} from "@core/services/classes/utils/Alert";
import {Observable, Subscription} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class ArticulosTallaEngine{

  constructor(
    private httpTallas: HttpTallasService,
    private alert:Alert
  ) {
  }

  index(): Observable<any> {
    return this.httpTallas.read();
  }

  storage(data: FormData): Subscription {
    return this.httpTallas.create(data).subscribe({
      next:(n)=>{
        this.alert.success(n, 'Exito!')
      },
      error:(e)=>{
        console.log(e.error)
      }
    });
  }

  update(data:FormData, id: number): Subscription {
    return this.httpTallas.update(data, id).subscribe({
      next:(n)=>{
        this.alert.success(n, 'Exito!')
      },
      error:(e)=>{
        console.log(e.error)
      }
    });
  }

  show(id:number): Observable<any> {
    return this.httpTallas.get(id);
  }

  delete(id:number): Observable<any> {
    return this.httpTallas.delete(id);
  }
}
