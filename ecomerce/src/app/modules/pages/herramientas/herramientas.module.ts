import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerramientasComponent } from './herramientas/herramientas.component';
import {RouterModule} from "@angular/router";
import {routeHerramientas} from "../../modules-routing.module";
import {LayoutModule} from "@shared/layout/layout.module";
import { MarcasComponent } from './marcas/marcas.component';
import { TallasComponent } from './tallas/tallas.component';
import { TiposComponent } from './tipos/tipos.component';
import { ArticulosComponent } from './articulos/articulos.component';
import {ComponentsModule} from "@shared/components/components.module";



@NgModule({
  declarations: [
    HerramientasComponent,
    MarcasComponent,
    TallasComponent,
    TiposComponent,
    ArticulosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeHerramientas),
    LayoutModule,
    ComponentsModule,
  ]
})
export class HerramientasModule { }
