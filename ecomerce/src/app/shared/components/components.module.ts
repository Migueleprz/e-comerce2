import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticuloComponent } from './card-articulo/card-articulo.component';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
    declarations: [
        CardArticuloComponent,
        CardComponent,
        ModalComponent
    ],
    exports: [
        CardArticuloComponent,
        CardComponent,
        ModalComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsModule { }
