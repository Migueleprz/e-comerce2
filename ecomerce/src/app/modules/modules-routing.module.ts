import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home/home.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {SignupComponent} from "./pages/auth/signup/signup.component";
import {GLoginGuard} from "@core/guards/g-login.guard"
import {HerramientasComponent} from "./pages/herramientas/herramientas/herramientas.component";
import {MarcasComponent} from "./pages/herramientas/marcas/marcas.component";
import {TallasComponent} from "./pages/herramientas/tallas/tallas.component";
import {TiposComponent} from "./pages/herramientas/tipos/tipos.component";
import {ArticulosComponent} from "./pages/herramientas/articulos/articulos.component";

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

export const routeHerramientas: Routes = [
  {
    path:'',
    component: HerramientasComponent,
    data: {title: 'Herramientas', icon: 'bi bi-grid-1x2'},

  },
  {
    path:'marcas',
    component: MarcasComponent,
    data: {title: 'Tipos de Marcas', icon: 'fas fa-tags'},

  },
  {
    path:'tallas',
    component: TallasComponent,
    data: {title: 'Tipod de Tallas', icon: 'fa-solid fa-maximize'},

  },
  {
    path:'tipos',
    component: TiposComponent,
    data: {title: 'Tipos de Articulos', icon: 'fa-solid fa-layer-group'},

  },
  {
    path:'articulos',
    component: ArticulosComponent,
    data: {title: 'Articulos', icon: 'fa-solid fa-bag-shopping'},

  },
];
