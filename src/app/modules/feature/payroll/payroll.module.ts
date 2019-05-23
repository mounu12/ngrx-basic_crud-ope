import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeSalaryListComponent } from './containers/employee-salary-list/employee-salary-list.component';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSalaryBannerComponent } from './components/employee-salary-banner/employee-salary-banner.component';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeSalaryComponent } from './components/employee-salary/employee-salary.component';
import { EmployeeSalaryTableComponent } from './components/employee-salary-table/employee-salary-table.component';


const payrollRoutes: Routes = [
  { path: '', pathMatch: 'full', component: EmployeeSalaryListComponent },
];
@NgModule({
  declarations: [EmployeeSalaryListComponent, EmployeeSalaryBannerComponent, EmployeeSalaryComponent, EmployeeSalaryTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(payrollRoutes),
  ]
})
export class PayrollModule { }
