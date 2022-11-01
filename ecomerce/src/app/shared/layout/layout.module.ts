import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [
    RouterModule,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    NgxPaginationModule
  ]
})
export class LayoutModule {
}
