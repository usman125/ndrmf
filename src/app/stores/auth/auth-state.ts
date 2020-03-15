const AUTH = {
  loggedUser: false,
  routeName: null,
  sideNavMode: true,
  userRole: '',
  eligibaleFlag: false,
  qualifiationFlag: false,
  checked: false,
  checkedThemeName: '',
}

export class AuthState {
  auth: {
    loggedUser: boolean,
    routeName: string,
    sideNavMode: boolean,
    userRole: string,
    eligibaleFlag: boolean,
    qualifiationFlag: boolean,
    checked: boolean,
    checkedThemeName: string,
  } = AUTH;
}
