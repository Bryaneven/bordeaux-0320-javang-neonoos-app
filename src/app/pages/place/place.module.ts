import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';
import { PlaceResultsComponent } from './place-view/components/place-results/place-results.component';
import { PlaceFilterComponent } from './place-view/components/place-filter/place-filter.component';


@NgModule({
  declarations: [
    PlaceViewComponent,
    PlaceEditComponent,
    PlaceResultsComponent,
    PlaceFilterComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
  ]
})
export class PlaceModule { }
