import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule
  ],
})

export class SharedModule {
}
