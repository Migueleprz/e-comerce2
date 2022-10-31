import {HttpAuthService} from "@core/services/http/http-auth.service";
import {Injectable, EventEmitter, Output} from "@angular/core";
import {Alert} from "@core/services/classes/utils/Alert";
import {SuccessAuth} from "@core/services/classes/SuccessAuth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class Auth {
  @Output() DataLogged: EventEmitter<any> = new EventEmitter();
  constructor(
    private httpAuth: HttpAuthService,
    private sAuth: SuccessAuth,
    private alert: Alert,
    private router: Router,
  ) {
  }

  login(data: FormData): void {
    this.httpAuth.login(data).subscribe(
      {
        next: (res) => {
          this.sAuth.goIn(res.token, res.sub, res.user, res.email, res.type, res.image);
        },
        error: (err) => {
          if (err.error.email) {
            this.alert.danger(err.error.email[0], 'Error');
          }
          if (err.error.password) {
            this.alert.danger(err.error.password[0], 'Error');
          }
          if (err.status === 404) {
            this.alert.info(err.error, 'Mensaje');
          }
        }
      }
    )
  }

  register(data: FormData): void {
    this.httpAuth.register(data).subscribe({
        next: (n) => {
          this.alert.success(n, 'Mensaje');
        },
        complete: () => {
          this.router.navigate(['/auth/login']);
        },
        error: (e) => {
          if (e.error.nuip) {
            this.alert.danger(e.error.nuip[0], 'Error');
          }
          if (e.error.nombres) {
            this.alert.danger(e.error.nombres[0], 'Error');
          }
          if (e.error.apellidos) {
            this.alert.danger(e.error.apellidos[0], 'Error');
          }
          if (e.error.email) {
            this.alert.danger(e.error.email[0], 'Error');
          }
          if (e.error.password) {
            this.alert.danger(e.error.password[0], 'Error');
          }
        },

      }
    )
  }

  logout(): void {
    this.httpAuth.logout().subscribe({
      next: (n) => {
        if(n){
          localStorage.clear();
          this.router.navigate(['/']);
        }
      },
      error: (e) => {
        console.log(e)
      }
    })
  }



}
