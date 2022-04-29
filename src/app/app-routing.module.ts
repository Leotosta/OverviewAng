import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersResolver } from './guards/loadUser.resolver';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', canActivate: [AuthGuard], resolve: { userData: UsersResolver } ,component: HomeComponent},
  { path: 'finance', loadChildren: () => import('./patrimony/patrimony.module').then(m => m.PatrimonyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
