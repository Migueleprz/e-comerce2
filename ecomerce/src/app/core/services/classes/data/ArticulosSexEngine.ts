import {Injectable} from "@angular/core";
import {HttpSexService} from "@core/services/http/http-sex.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})

export class ArticulosSexEngine{
  constructor(
    private httpSex: HttpSexService
  ) {
  }

  index(): Observable<any> {
    return this.httpSex.read();
  }
}
