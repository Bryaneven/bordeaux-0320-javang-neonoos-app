import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceResultsComponent } from './place-view/components/place-results/place-results.component';
import { PlaceFilterComponent } from './place-view/components/place-filter/place-filter.component';
import { PlaceEditViewComponent } from './place-edit-view/place-edit-view.component';
import { PlaceEditComponent } from './place-edit-view/components/place-edit/place-edit.component';
import { PlaceDescriptionComponent } from './place-edit-view/components/place-description/place-description.component';
import { PlacePictureComponent } from './place-edit-view/components/place-picture/place-picture.component';


@NgModule({
  declarations: [
    PlaceViewComponent,
    PlaceResultsComponent,
    PlaceFilterComponent,
    PlaceEditViewComponent,
    PlaceEditComponent,
    PlaceDescriptionComponent,
    PlacePictureComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
  ]
})
export class PlaceModule { }
