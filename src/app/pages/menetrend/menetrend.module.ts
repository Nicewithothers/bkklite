import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenetrendRoutingModule } from './menetrend-routing.module';
import {MenetrendComponent} from "./menetrend.component";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {AppModule} from "../../app.module";
import {UploaddatePipe} from "../shared/pipes/uploaddate.pipe";


@NgModule({
  declarations: [
    MenetrendComponent,
    UploaddatePipe
  ],
  imports: [
    CommonModule,
    MenetrendRoutingModule,
    FlexModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule
  ]
})
export class MenetrendModule { }
