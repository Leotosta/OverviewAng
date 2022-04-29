import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatrimonyRoutingModule } from './patrimony-routing.module';
import { PatrimonyComponent } from './patrimony.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';


@NgModule({
  declarations: [
    PatrimonyComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PatrimonyRoutingModule
  ]
})
export class PatrimonyModule { }
