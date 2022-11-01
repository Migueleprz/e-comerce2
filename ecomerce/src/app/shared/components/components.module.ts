import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticuloComponent } from './card-articulo/card-articulo.component';



@NgModule({
    declarations: [
        CardArticuloComponent
    ],
    exports: [
        CardArticuloComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
