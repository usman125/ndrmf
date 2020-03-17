import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LoginComponent,
  SurveysComponent,
  CoffeeElectionComponent,
  RegisterComponent,
  AuthGuard,
  UsersComponent,
  CreateSurveyComponent,
  FipHomeComponent,
  FipEligibilityComponent,
  FipQualificationComponent,
  AccreditationRequestComponent,
  SmeComponent,
  AddSmeComponent,
  AddUserComponent,
  AccreditationCommentsMatrixComponent,
  EligibilityRequestsComponent,
} from "./components/component-index";
import { SiteLayout } from "./components/common/layouts/sitelayout/sitelayout.component";
import { Role } from './models/Roles';

const loggedUser = JSON.parse(localStorage.getItem('user'));

const routes: Routes = [
  {
    path: 'test',
    component: SiteLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: FipHomeComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
        // canActivate: [AuthGuard],
        // data: { roles: [Role.Admin] }
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'surveys',
    component: SurveysComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'coffee',
    component: CoffeeElectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'create-survey',
    component: CreateSurveyComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'fip-home',
    component: FipHomeComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Fip] }
  },
  {
    path: 'fip-eligibility',
    component: FipEligibilityComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Fip] }
  },
  {
    path: 'fip-qualification',
    component: FipQualificationComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Fip] }
  },
  {
    path: 'accreditation-requests',
    component: AccreditationRequestComponent,
    canActivate: [AuthGuard],
    data: { 
      roles: [Role.Admin, Role.Sme] 
    }
  },
  {
    path: 'smes',
    component: SmeComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'add-sme',
    component: AddSmeComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'request-comments',
    component: AccreditationCommentsMatrixComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'eligibility-requests',
    component: EligibilityRequestsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  // {
  //   path: 'form',
  //   loadChildren: './form/form.module#FormModule',
  //   canActivate: [AuthGuard]
  // },
  {
    path: '**',
    component: LoginComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
