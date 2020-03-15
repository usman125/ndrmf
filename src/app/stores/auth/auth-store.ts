import { Injectable } from '@angular/core';
import { Store } from '../store';
import { AuthState } from './auth-state';

@Injectable()
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(new AuthState());
  }

  setLoginState(status: boolean): void {
    this.setState({
      ...this.state,
      auth: {
        loggedUser: status,
        routeName: this.state.auth.routeName,
        userRole: this.state.auth.userRole,
        sideNavMode: this.state.auth.sideNavMode,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        checked: this.state.auth.checked,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    });
  }
  
  setEligibleFlag(eligibaleFlag: boolean): void {
    this.setState({
      ...this.state,
      auth: {
        loggedUser: this.state.auth.loggedUser,
        routeName: this.state.auth.routeName,
        userRole: this.state.auth.userRole,
        sideNavMode: this.state.auth.sideNavMode,
        eligibaleFlag: eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        checked: this.state.auth.checked,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    });
  }

  setQualificationFlag(qualifiationFlag: boolean): void {
    this.setState({
      ...this.state,
      auth: {
        loggedUser: this.state.auth.loggedUser,
        routeName: this.state.auth.routeName,
        userRole: this.state.auth.userRole,
        sideNavMode: this.state.auth.sideNavMode,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: qualifiationFlag,
        checked: this.state.auth.checked,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    });
  }

  setRouteName(name: string): void {
    this.setState({
      ...this.state,
      auth: {
        loggedUser: this.state.auth.loggedUser,
        userRole: this.state.auth.userRole,
        routeName: name,
        sideNavMode: this.state.auth.sideNavMode,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        checked: this.state.auth.checked,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    });
  }

  setThemeName(name: string): void {
    this.setState({
      ...this.state,
      auth: {
        loggedUser: this.state.auth.loggedUser,
        userRole: this.state.auth.userRole,
        routeName: name,
        sideNavMode: this.state.auth.sideNavMode,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        checked: this.state.auth.checked,
        checkedThemeName: name,
      }
    });
  }

  setUserRole(name: string): void {
    this.setState({
      ...this.state,
      auth: {
        loggedUser: this.state.auth.loggedUser,
        userRole: name,
        checked: this.state.auth.checked,
        routeName: this.state.auth.routeName,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        checkedThemeName: this.state.auth.checkedThemeName,
        sideNavMode: this.state.auth.sideNavMode
      }
    });
  }

  toogleSideNav = () => {
    this.setState({
      ...this.state,
      auth: {
        checked: this.state.auth.checked,
        loggedUser: this.state.auth.loggedUser,
        routeName: this.state.auth.routeName,
        userRole: this.state.auth.userRole,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        sideNavMode: !this.state.auth.sideNavMode,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    })
  }
  openSideNav = () => {
    this.setState({
      ...this.state,
      auth: {
        checked: this.state.auth.checked,
        loggedUser: this.state.auth.loggedUser,
        routeName: this.state.auth.routeName,
        userRole: this.state.auth.userRole,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        sideNavMode: true,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    })
  }
  closeSideNav = () => {
    this.setState({
      ...this.state,
      auth: {
        checked: this.state.auth.checked,
        loggedUser: this.state.auth.loggedUser,
        routeName: this.state.auth.routeName,
        userRole: this.state.auth.userRole,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        sideNavMode: false,
        checkedThemeName: this.state.auth.checkedThemeName,
      }
    })
  }

  toggleTheme(
  ) {
    this.setState({
      ...this.state,
      auth: {
        checked: !this.state.auth.checked,
        loggedUser: this.state.auth.loggedUser,
        routeName: this.state.auth.routeName,
        eligibaleFlag: this.state.auth.eligibaleFlag,
        qualifiationFlag: this.state.auth.qualifiationFlag,
        userRole: this.state.auth.userRole,
        checkedThemeName: this.state.auth.checkedThemeName,
        sideNavMode: this.state.auth.sideNavMode,
      }
    })
  }

}
