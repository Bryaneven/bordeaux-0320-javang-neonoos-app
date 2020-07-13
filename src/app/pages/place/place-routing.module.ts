import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceEditViewComponent } from './place-edit-view/place-edit-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view'
  },
  {
    path: 'view',
    component: PlaceViewComponent
     
  },
  {
    path: 'new',
    component: PlaceEditViewComponent
  },
  {
    path: 'edit/:id',
    component: PlaceEditViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
