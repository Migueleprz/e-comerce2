import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorage } from '@core/services/classes/LocalStorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GTypeGuard implements CanActivate {
  constructor(
    private lStorage:LocalStorage,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const type = Boolean(this.lStorage.get('type'));
    if(!type){
      this.router.navigate(['']);
    }
    return type;
  }

}
