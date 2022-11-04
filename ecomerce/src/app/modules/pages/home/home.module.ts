import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {routeHome} from "../../modules-routing.module";
import {LayoutModule} from "@shared/layout/layout.module";
import {ComponentsModule} from "@shared/components/components.module";
import { ArticuloComponent } from './articulo/articulo.component';



@NgModule({
  declarations: [
    HomeComponent,
    ArticuloComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeHome),
    LayoutModule,
    ComponentsModule,
  ]
})
export class HomeModule { }
