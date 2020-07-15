import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapboxComponent } from './components/mapbox/mapbox.component';



@NgModule({
  declarations: [
    MapboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapboxComponent
  ]
})
export class SharedModule { }
