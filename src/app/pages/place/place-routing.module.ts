import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceViewComponent } from './place-view/place-view.component';
import { PlaceEditComponent } from './place-edit/place-edit.component';


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
    component: PlaceEditComponent
  },
  {
    path: 'edit/:id',
    component: PlaceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
