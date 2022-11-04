import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LocalStorage } from '@core/services/classes/LocalStorage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GLoginGuard implements CanActivate {
  constructor(
    private lStorage:LocalStorage,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogged = Boolean(localStorage.getItem("isLogged"));
    console.log(isLogged)
    if(isLogged){
      return true;
    }else{
      return false;
    }

  }

}
