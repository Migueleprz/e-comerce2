import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {SignupComponent} from "./pages/auth/signup/signup.component";
import {GLoginGuard} from "@core/guards/g-login.guard"

export const routeHome: Routes = [
  {
    path:'',
    component: HomeComponent,
    data: {title: 'Panel Principal', icon: 'bi bi-grid-1x2'}
  }
];

export const routeAuth: Routes = [
  {
    path:'login',
    component: LoginComponent,
    data: {title: 'Iniciar sesión', icon: 'bi bi-grid-1x2'},
    canActivate:[GLoginGuard]
  },
  {
    path:'signup',
    component: SignupComponent,
    data: {title: 'Registrate', icon: 'bi bi-grid-1x2'},
    canActivate:[GLoginGuard]
  }
];
