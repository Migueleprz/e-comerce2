import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {LocalStorage} from "@core/services/classes/LocalStorage";

@Injectable({
  providedIn: 'root'
})
export class SuccessAuth {
  constructor(
    private router: Router,
    private lStorage: LocalStorage
  ) {
  }

  public goIn(token: string, sub: string, user: string, email: string, type: string, image:string) {
    localStorage.setItem('isLogged', 'true');
    this.lStorage.set('token',token);
    this.lStorage.set('sub',sub);
    this.lStorage.set('user',user);
    this.lStorage.set('email',email);
    this.lStorage.set('image', image);
    this.lStorage.set('type',type);
    this.router.navigate(['/']);
  }
}
