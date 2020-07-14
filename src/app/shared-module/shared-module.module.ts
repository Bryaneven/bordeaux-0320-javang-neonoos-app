import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { MapboxComponent } from './mapbox/mapbox.component';


@NgModule({
  declarations: [
    MapboxComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports: [
    MapboxComponent
  ]
})
export class SharedModuleModule { }
