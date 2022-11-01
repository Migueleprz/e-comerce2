import {Observable} from "rxjs";

export interface IHttpArticulos{
  read():Observable<any>;
}
