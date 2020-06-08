import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


import { GuideRoutingModule } from './guide-routing.module';
import { GuideFilterComponent } from './guide-view/components/guide-filter/guide-filter.component';
import { GuideResultsComponent } from './guide-view/components/guide-results/guide-results.component';
import { GuideViewComponent } from './guide-view/guide-view.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { GuideEditComponent } from './guide-edit/guide-edit.component';



@NgModule({
  declarations: [GuideFilterComponent, GuideResultsComponent, GuideViewComponent, HeaderComponent, NavbarComponent, GuideEditComponent],
  imports: [
    CommonModule,
    GuideRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class GuideModule { }
