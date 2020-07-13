import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';
import { PlaceResultsComponent } from './place-view/components/place-results/place-results.component';
import { PlaceFilterComponent } from './place-view/components/place-filter/place-filter.component';
import { StarsboxComponent } from '../../shared/components/starsbox/starsbox.component';


@NgModule({
  declarations: [
    PlaceViewComponent,
    PlaceEditComponent,
    PlaceResultsComponent,
    PlaceFilterComponent,
    StarsboxComponent
  ],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule,
    MatAutocompleteModule,
  ]
})
export class PlaceModule { }
