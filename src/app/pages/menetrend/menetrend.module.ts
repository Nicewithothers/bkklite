import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenetrendRoutingModule } from './menetrend-routing.module';
import {MenetrendComponent} from "./menetrend.component";


@NgModule({
  declarations: [
    MenetrendComponent
  ],
  imports: [
    CommonModule,
    MenetrendRoutingModule
  ]
})
export class MenetrendModule { }
