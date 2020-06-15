import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';


@NgModule({
  declarations: [PlaceViewComponent, PlaceEditComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule
  ]
})
export class PlaceModule { }
