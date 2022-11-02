import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    NgxPaginationModule,
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule {
}
