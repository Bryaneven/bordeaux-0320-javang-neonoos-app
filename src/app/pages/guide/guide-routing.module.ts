import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideViewComponent } from './guide-view/guide-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: GuideViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
