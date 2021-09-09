import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { SinginComponent } from './admin/singin/singin.component';
import { SingupComponent } from './admin/singup/singup.component';
import { CompanyComponent } from './task/company/company.component';
import { IntershipComponent } from './task/intership/intership.component';

const routes: Routes = [
  {path:'signup',component:SingupComponent},
  {path:'signin',component:SinginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',component:HomeComponent},
  {path:'company',component:CompanyComponent},
  {path:'internship',component:IntershipComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
