import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideRoutingModule } from './guide-routing.module';
import { GuideFilterComponent } from './guide-view/components/guide-filter/guide-filter.component';
import { GuideResultsComponent } from './guide-view/components/guide-results/guide-results.component';
import { GuideViewComponent } from './guide-view/guide-view.component';


@NgModule({
  declarations: [GuideFilterComponent, GuideResultsComponent, GuideViewComponent],
  imports: [
    CommonModule,
    GuideRoutingModule
  ]
})
export class GuideModule { }
