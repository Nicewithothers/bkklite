import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpassComponent } from './newpass.component';

const routes: Routes = [{ path: '', component: NewpassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewpassRoutingModule { }
