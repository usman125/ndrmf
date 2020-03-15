import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: LoginService, 
              private router: Router) {}

  canActivate() {
    if(this._authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
