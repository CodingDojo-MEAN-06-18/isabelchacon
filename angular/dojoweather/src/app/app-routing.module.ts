import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from '../app/planet/planet.component';

const routes: Routes = [
  { path: '', 
  pathMatch: 'full', 
  redirectTo: '/tatooine'},
  {
    path: ':location',
    pathMatch: 'full',
    component: PlanetComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
