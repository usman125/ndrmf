import { Injectable } from '@angular/core';
import { Store } from '../store';
import { AccreditationRequestState } from './accreditation-requests-state';
import * as _ from "lodash";

@Injectable()
export class AccreditationRequestStore extends Store<AccreditationRequestState> {
  constructor() {
    super(new AccreditationRequestState());
  }

  addRequest(
    userRef: string,
    formSubmitData: any,
    formData: any,
    status: string,
    formIdentity: string,
    startDate: string,
    endDate: string,
    previousReview: string,
    currentReview: string,
    requestKey: string,
    userUpdateFlag: boolean,
  ): void {
    this.setState({
      ...this.state,
      requests: [
        ...this.state.requests,
        {
          userRef: userRef,
          formSubmitData: formSubmitData,
          formData: formData,
          status: status,
          formIdentity: formIdentity,
          startDate: startDate,
          endDate: endDate,
          previousReview: previousReview,
          currentReview: currentReview,
          requestKey: requestKey,
          userUpdateFlag: userUpdateFlag,
        }
      ]
    });
  }

  updateAllRequestReview(
    // formIdentity: string,
    userRef: string,
    startDate: string,
    endDate: string,
    previousReview: string,
    currentReview: string,
  ): void {
    this.setState({
      ...this.state,
      requests: this.state.requests.map((c) => {
        if (c.userRef === userRef) {
          return {
            ...c,
            startDate: startDate,
            endDate: endDate,
            previousReview: previousReview,
            currentReview: currentReview,
          }
        }
        return c;
      })
    });
  }

  setUserUpdateFlag(
    userRef: string,
    formIdentity: string,
  ) {
    console.log("Update FLAg IN SET UPADTE ACTION:000", userRef, formIdentity);
    this.setState({
      ...this.state,
      requests: this.state.requests.map((c) => {
        if (c.userRef === userRef && formIdentity === c.formIdentity) {
          return { ...c, userUpdateFlag: true }
        }
        return c;
      })
    })
  }

  unSetUserUpdateFlag(
    userRef: string,
    formIdentity: string,
    submitData: any,
  ) {
    console.log("Update FLAg IN SET UPADTE ACTION:000", userRef, formIdentity);
    this.setState({
      ...this.state,
      requests: this.state.requests.map((c) => {
        if (c.userRef === userRef && formIdentity === c.formIdentity) {
          return { ...c, userUpdateFlag: false, formSubmitData: submitData }
        }
        return c;
      })
    })
  }

  updateRequestReview(
    formIdentity: string,
    userRef: string,
    startDate: string,
    endDate: string,
    previousReview: string,
    currentReview: string,
  ): void {
    this.setState({
      ...this.state,
      requests: this.state.requests.map((c) => {
        if (c.formIdentity === formIdentity && c.userRef === userRef) {
          return {
            ...c,
            startDate: startDate,
            endDate: endDate,
            previousReview: previousReview,
            currentReview: currentReview,
          }
        }
        return c;
      })
    });
  }

  markRequestReview(
    userRef: string,
    formIdentity: string,
    currentReview: string,
    previousReview: string,
    status: string,
  ): void {
    this.setState({
      ...this.state,
      requests: this.state.requests.map((c) => {
        if (c.userRef === userRef && c.formIdentity === formIdentity) {
          return { ...c, currentReview: currentReview, previousReview: previousReview, status: status }
        }
        return c;
      })
    })
  }

  checkEntry(
    userRef: string,
    formIdentity: string,
  ) {
    let result: any = this.state.requests.map((c) => {
      if (c.userRef === userRef && c.formIdentity === formIdentity) {
        return { ...c, exists: true };
      }
      return { ...c, exists: false };
    })
    var flag: any = _.find(result, { exists: true });
    if (flag) {
      return true;
    }
    return false;
  }

}
