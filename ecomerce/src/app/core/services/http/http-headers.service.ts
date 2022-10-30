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
    const itemToken = localStorage.getItem("token");
    if (itemToken) {
      const token = this.lStorage.get("token")
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
          ContentType: 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${itemToken}`
        }
      });
      return next.handle(req2);
    }

  }
}
