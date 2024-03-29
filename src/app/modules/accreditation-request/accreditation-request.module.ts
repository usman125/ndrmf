import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccreditationRequestComponent, AssignTask, IntimateFip } from "../../components/component-index";
import { AccreditationRequestRoutingModule } from "./accreditation-request-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { BarRatingModule } from "ngx-bar-rating";
import { FormioModule } from "angular-formio";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AccreditationRequestComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormioModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule,
    BarRatingModule,
    MatDividerModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AccreditationRequestRoutingModule,
  ],
  entryComponents: [AssignTask, IntimateFip]
})
export class AccreditationRequestModule { }
