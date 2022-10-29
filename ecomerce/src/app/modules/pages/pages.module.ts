import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {LayoutModule} from "@shared/layout/layout.module";
import {MainComponent} from "./main/main/main.component";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule

  ],
  exports:[
    MainComponent
  ]
})
export class PagesModule { }
