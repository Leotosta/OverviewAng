import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { PatrimonyComponent } from './patrimony.component';

const routes: Routes = [
  { path: 'patrimony', component: PatrimonyComponent },
  { path: 'dashboard/:id/:title', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatrimonyRoutingModule { }
