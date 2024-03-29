import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveysComponent } from '../../components/component-index';

const routes: Routes = [
  {
    path: '',
    component: SurveysComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule { }