import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyComponent } from "../../components/component-index";
import { CreateSurveyRoutingModule } from "./create-survey-routing.module";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormioModule } from "angular-formio";

@NgModule({
  declarations: [
    CreateSurveyComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    FormioModule,
    MatSelectModule,
    MatButtonModule,
    MatSelectModule,
    CreateSurveyRoutingModule,
  ]
})
export class CreateSurveyModule { }
