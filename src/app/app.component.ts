import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { AuthStore } from "../app/stores/auth/auth-store";
import { OverlayContainer } from '@angular/cdk/overlay';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate(4000)
      ])
    ]),
    trigger('pageAnimations', [
      transition(':enter', [
        query('.hero, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
  ]
})

export class AppComponent implements OnInit, OnDestroy {

  title = 'survey-manager';
  loggedUser: boolean = false;
  loggedUserRole: any = null;
  sideNavMode: boolean = false;
  private subscriptions: Subscription = new Subscription();
  // private subscriptions2: Subscription = new Subscription();

  currentUser: any = null;
  appRouteName: any = null;
  userEligibleStatus: boolean;
  userQualificationStatus: boolean;
  appRouteActive: any = null;
  themeName: any = null;
  checked: boolean = false;

  constructor(
    private _authStore: AuthStore,
    private _router: Router,
    private _overlayContainer: OverlayContainer,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.currentUser) {
      this._authStore.setLoginState(true);
    }
  }

  ngOnInit() {
    // console.log("APP COMPONENT");
    this._authStore.setThemeName('material-base-theme');
    if (this.currentUser) {
      this._authStore.setUserRole(this.currentUser.role);
      this.subscriptions.add(
        this._authStore.state$.subscribe((auth) => {
          this.loggedUser = auth.auth.loggedUser;
          this.sideNavMode = auth.auth.sideNavMode;
          this.loggedUserRole = auth.auth.userRole;
          this.appRouteName = auth.auth.routeName;
          this.userEligibleStatus = auth.auth.eligibaleFlag;
          this.userQualificationStatus = auth.auth.qualifiationFlag;
          this.checked = auth.auth.checked;
          this.themeName = auth.auth.checkedThemeName;
          // console.log("FLAGS FROM APP COMPONENT:--", auth.auth.eligibaleFlag, this.themeName, this.checked);
          // if (this.checked) {
          //   this._overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
          // } else {
          //   this._overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
          // }
          if (!this.loggedUser) {

            this._overlayContainer.getContainerElement().classList.add('show-login-page');
          }
          if (this.themeName === 'unicorn-dark-theme') {
            this._overlayContainer.getContainerElement().classList.remove('unicorn-light-theme');
            this._overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
          } else if (this.themeName === 'unicorn-light-theme') {
            this._overlayContainer.getContainerElement().classList.add('unicorn-light-theme');
            this._overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
          } else if (this.themeName === 'material-base-theme') {
            this._overlayContainer.getContainerElement().classList.remove('unicorn-light-theme');
            this._overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
          }
        })
      );
      this._router.events.subscribe((url: any) => {
        if (url.url === '/') {
          if (this.currentUser.role === 'admin') {
            this._router.navigate(['/surveys']);
          } else if (this.currentUser.role === 'fip') {
            this._router.navigate(['/fip-home']);
          }
        } else if (url.url === '/fip-qualification') {
          if (!this.userEligibleStatus) {
            this._router.navigate(['/fip-eligibility']);
          }
          // console.log("fip-eligibility", url);
        }
      });
      this._authStore.setEligibleFlag(this.currentUser.eligibileFlag);
    } else {
      this._authStore.setLoginState(false);
      this.subscriptions.add(
        this._authStore.state$.subscribe((auth) => {
          this.loggedUser = auth.auth.loggedUser;
        })
      );
      this._authStore.setRouteName('Login');
      this._router.navigate(['/']);
    }
  }

  changeRouteName(route) {
    if (route === 'Eligibility') {
      this._authStore.setRouteName('ACCREDITATION-ELIGIBILITY-REQUESTS');
    } else {
      this._authStore.setRouteName('ACCREDITATION-REQUESTS');
    }
    this._router.navigate(['/accreditation-requests']);
  }

  getLink($event) {
    $event.prevenetDefaults();

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // .main-block {
    //   width: 50%;
    // }

    // .intimation-block {
    //   width: 20%;
    // }
    if (event.target.innerWidth < 1050) {
      // this.navMode = 'over';
      // this.sidenav.close();
      console.log("LESS THEN 886", event.target.innerWidth)
      // document.getElementById('get-main-block').style.width = '50%';
      // document.getElementById('get-intimation-block').style.width = '20%';
      this._authStore.closeSideNav();
    }
    if (event.target.innerWidth > 1050) {
      console.log("GREATER 886", event.target.innerWidth)
      this._authStore.openSideNav();
      //  this.navMode = 'side';
      //  this.sidenav.open();
    }
  }
}
