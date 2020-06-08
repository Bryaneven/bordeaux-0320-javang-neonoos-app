import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideViewComponent } from './guide-view/guide-view.component';
import { GuideEditViewComponent } from './guide-edit-view/guide-edit-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: GuideViewComponent
  },
  {
    path: 'edit',
    component: GuideEditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
