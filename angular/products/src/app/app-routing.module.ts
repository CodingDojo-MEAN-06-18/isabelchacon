import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './components';

const routes: Routes = [
  { path: '', 
    pathMatch: 'full', 
    component: fromComponents.HomeComponent },
  { path: 'home', 
    component: fromComponents.HomeComponent },
  { path: 'products/new', 
    component: fromComponents.NewComponent },
  { path: 'products', 
    component: fromComponents.ListComponent },
  { path: 'products/edit/:id', 
    component: fromComponents.EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
