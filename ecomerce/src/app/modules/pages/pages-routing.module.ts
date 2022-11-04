import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main/main.component";

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'auth',
        loadChildren:()=> import('./auth/auth.module').then((m)=>m.AuthModule)
      },
      {
        path:'',
        loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule)
      },
      {
        path:'herramientas',
        loadChildren:()=> import('./herramientas/herramientas.module').then((m)=>m.HerramientasModule)
      },
      {
        path:'carrito',
        loadChildren:()=> import('./cart/cart.module').then((m)=>m.CartModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
