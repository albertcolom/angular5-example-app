import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/module/shared.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    Error404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    Error404Component,
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
