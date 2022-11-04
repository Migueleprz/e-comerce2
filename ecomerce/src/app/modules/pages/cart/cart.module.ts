import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routeCart} from "../../modules-routing.module";
import {LayoutModule} from "@shared/layout/layout.module";
import { CartShopComponent } from './cart-shop/cart-shop.component';



@NgModule({
  declarations: [
    CartShopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeCart),
    LayoutModule
  ]
})
export class CartModule { }
