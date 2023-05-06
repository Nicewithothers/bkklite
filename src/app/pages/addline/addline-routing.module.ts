import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlineComponent } from './addline.component';

const routes: Routes = [{ path: '', component: AddlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddlineRoutingModule { }
