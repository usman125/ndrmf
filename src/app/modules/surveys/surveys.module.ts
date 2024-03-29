import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from "../../components/component-index";
import { SurveysRoutingModule } from "./surveys-routing.module";
import { MatTableModule } from "@angular/material/table";

import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FormioModule } from 'angular-formio';

@NgModule({
  declarations: [
    SurveysComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SurveysRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatCardModule,
    FormioModule,
    MatButtonModule,
  ]
})

export class SurveysModule { }
