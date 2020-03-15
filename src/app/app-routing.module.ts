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

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  // },
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
    canActivate: [AuthGuard]
  },
  {
    path: 'coffee',
    component: CoffeeElectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-survey',
    component: CreateSurveyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fip-home',
    component: FipHomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'fip-eligibility',
    component: FipEligibilityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'fip-qualification',
    component: FipQualificationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'accreditation-requests',
    component: AccreditationRequestComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'smes',
    component: SmeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-sme',
    component: AddSmeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'request-comments',
    component: AccreditationCommentsMatrixComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eligibility-requests',
    component: EligibilityRequestsComponent,
    canActivate: [AuthGuard]
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
