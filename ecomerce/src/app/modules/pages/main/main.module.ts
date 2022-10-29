import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {LayoutModule} from "@shared/layout/layout.module";




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    LayoutModule

  ]
})
export class MainModule { }
