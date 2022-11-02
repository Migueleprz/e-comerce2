import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticuloComponent } from './card-articulo/card-articulo.component';
import { CardComponent } from './card/card.component';



@NgModule({
    declarations: [
        CardArticuloComponent,
        CardComponent
    ],
    exports: [
        CardArticuloComponent,
        CardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
