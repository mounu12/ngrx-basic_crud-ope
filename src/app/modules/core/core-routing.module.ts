import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { EmployeeListService } from 'src/app/services/employee-list/employee-list.service';

const routes: Routes = [
  { path: '',redirectTo: '/login', pathMatch: 'full' },
  {
     path:'login', loadChildren: '../login/login.module#LoginModule'
  },
  {
    path: 'employee', loadChildren: '../feature/dashboard/dashboard.module#DashboardModule', canActivate: [ LoginService ]
  },
  {
    path: 'employee/view-employee/:id', loadChildren: '../feature/dashboard/dashboard.module#DashboardModule'

  },
  {
    path: 'employee/create-employee', loadChildren: '../feature/dashboard/dashboard.module#DashboardModule'

  },
  {
    path: 'employee/edit-employee/:id', loadChildren : '../feature/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'employee-salary-list', loadChildren : '../feature/payroll/payroll.module#PayrollModule'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
