import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'guide',
    loadChildren: () => import('../app/pages/guide/guide.module').then(
      m => m.GuideModule
    )
  },
  {
    path: 'place',
    loadChildren: () => import('../app/pages/place/place.module').then(
      m => m.PlaceModule
    )
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
