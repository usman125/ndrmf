import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../stores/auth/auth-store';
import { UsersStore } from '../../stores/users/users-store';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import * as _ from 'lodash';
import { UsersState } from "../../stores/users/users-state";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit, OnDestroy {

  public loggedUser: any = null;
  public allUsers: any = [];
  public loginForm: FormGroup;
  public Subscription: Subscription = new Subscription();

  constructor(
    private _authStore: AuthStore,
    private _usersStore: UsersStore,
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
    this._buildLoginForm();
  }

  _buildLoginForm() {
    this.loginForm = this._formBuilder.group({
      'username': [''],
      'password': [''],
    })
  }

  ngOnInit() {
    setTimeout(() => {
      this._authStore.setRouteName('Login');
    })
    this.Subscription.add(
      this._usersStore.state$.subscribe(data => {
        this.allUsers = data.users;
        console.log(this.allUsers)
      })
    )
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    if (this.loggedUser){
      if (this.loggedUser.role === 'admin'){
        this._router.navigate(['/surveys']);
      }
      if (this.loggedUser.role === 'fip'){
        this._router.navigate(['/fip-home']);
      }
      if (this.loggedUser.role === 'sme'){
        this._router.navigate(['/accreditation-requests']);
      }
    }
    // this.Subscription.add(
    //   this._usersStore.state$.subscribe(data => {
    //     this.allUsers = data.users;
    //     console.log(this.allUsers)
    //   })
    // )
  }

  setLoggedUser(values) {
    var user = _.find(this.allUsers, { 'username': values.username, 'password': values.password })
    if (user) {
      this._authStore.setLoginState(true);
      this._authStore.setUserRole(user.role);
      this._authStore.setEligibleFlag(user.eligibileFlag);
      this._authStore.setQualificationFlag(user.qualificationFlag);
      user = JSON.stringify(user);
      localStorage.setItem('user', user);
      if (JSON.parse(user).role === 'admin') {
        this._router.navigate(['/surveys']);
      } else if (JSON.parse(user).role === 'fip') {
        this._router.navigate(['/fip-home']);
      } else if (JSON.parse(user).role === 'sme') {
        this._router.navigate(['/accreditation-requests']);
      }
    }
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
