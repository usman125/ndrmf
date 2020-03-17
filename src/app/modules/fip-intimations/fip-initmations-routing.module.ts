import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IntimateFip } from '../../components/component-index';


const routes: Routes = [
  {
    path: '',
    component: IntimateFip,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntimateFipRoutingModule { }