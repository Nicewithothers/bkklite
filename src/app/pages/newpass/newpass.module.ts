import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewpassRoutingModule } from './newpass-routing.module';
import { NewpassComponent } from './newpass.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    NewpassComponent
  ],
  imports: [
    CommonModule,
    NewpassRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class NewpassModule { }
