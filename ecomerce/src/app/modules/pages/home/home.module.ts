import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {routeHome} from "../../modules-routing.module";
import {LayoutModule} from "@shared/layout/layout.module";
import {ComponentsModule} from "@shared/components/components.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeHome),
    LayoutModule,
    ComponentsModule,
  ]
})
export class HomeModule { }
