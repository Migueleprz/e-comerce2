import {HttpAuthService} from "@core/services/http/http-auth.service";
import {Injectable} from "@angular/core";
import {Alert} from "@core/services/classes/utils/Alert";
import {SuccessAuth} from "@core/services/classes/SuccessAuth";

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(
    private httpAuth: HttpAuthService,
    private sAuth:SuccessAuth,
    private alert: Alert
  ) {
  }

  login(data: FormData): void {
    this.httpAuth.login(data).subscribe(
      (res) => {
        this.sAuth.goIn(res.token, res.sub, res.user, res.email, res.email, res.image)
      },
      (err) => {
        if(err.error.email){this.alert.danger(err.error.email[0],'Error')}
        if(err.error.password){this.alert.danger(err.error.password[0],'Error')}
        if(err.status === 404){this.alert.info(err.error,'Mensaje')}
      }
    )
  }


}
