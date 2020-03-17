import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { AuthStore } from "../../stores/auth/auth-store";
import { SurveysStore } from "../../stores/surveys/surveys-store";
import { Subscription } from "rxjs";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css'],
})

export class SurveysComponent implements OnInit, OnDestroy, AfterViewInit {

  loggedUser: boolean = false;
  toggle: boolean = false;
  editFormFlag: boolean = false;

  refreshForm: EventEmitter<any> = new EventEmitter();

  form: any = {};
  secondForm: any = {};
  formValues: any = null;

  displayedColumns = ['name', 'smeRef', 'min', 'max', 'actions'];
  allForms: any = [];

  dataSource: any;

  Subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private _surveysStore: SurveysStore,
    private _authStore: AuthStore,
    private _changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this._authStore.setRouteName('Surveys');
    });
    this.Subscription.add(
      this._surveysStore.state$.subscribe(data => {
        this.allForms = data.surveys;
        this.dataSource = new MatTableDataSource(this.allForms);
        this._changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  toogleForm(form) {
    console.log("FORM TO SHOW:--", form)
    this.toggle = !this.toggle;
    this.secondForm = form;
    this.refreshForm.emit({
      form: this.secondForm
    })
  }

  editForm(form) {
    this.editFormFlag = !this.editFormFlag;
    this.secondForm = form;
    this.refreshForm.emit({
      form: this.secondForm
    })
  }

  onSubmit($event) {
    this.formValues = $event.data;
    // console.log("EVENT FROM FORM:---", $event.data);
    // this.refreshForm.emit({
    //   form: this.form
    // })
  }

  goBack() {
    this.toggle = !this.toggle;
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

}
