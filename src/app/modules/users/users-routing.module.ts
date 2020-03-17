import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent, AddUserComponent } from '../../components/component-index';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  // {
  //   path: 'add-user',
  //   component: AddUserComponent,
  // },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }