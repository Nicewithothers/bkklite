import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddlineRoutingModule } from './addline-routing.module';
import { AddlineComponent } from './addline.component';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AddlineComponent
  ],
  imports: [
    CommonModule,
    AddlineRoutingModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatSnackBarModule
  ]
})
export class AddlineModule { }
