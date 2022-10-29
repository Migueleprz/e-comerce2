import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {LocalStorage} from "@core/services/classes/LocalStorage";

@Injectable({
  providedIn: 'root'
})
export class HttpHeadersService implements HttpInterceptor {

  constructor(
    private lStorage: LocalStorage
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.lStorage.get("token");
    if (Boolean(token)) {
      const req2 = req.clone({
        setHeaders: {
          ContentType: 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(req2);
    } else {
      const req2 = req.clone({
        setHeaders: {
          Accept: 'application/json',
        }
      });
      return next.handle(req2);
    }

  }
}
