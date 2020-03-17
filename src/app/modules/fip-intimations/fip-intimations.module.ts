import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntimateFip } from "../../components/component-index";
import { IntimateFipRoutingModule } from "./fip-initmations-routing.module";
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionSelectorComponent } from '../../components/section-selector/section-selector.component';
// import {  } from "../../";
@NgModule({
  declarations: [
    IntimateFip,
    SectionSelectorComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    IntimateFipRoutingModule,
    FormsModule, 
    MatCardModule, 
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class IntimateFipModule { }
