import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeCardListComponent } from './components/employee-card-list/employee-card-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeListService } from 'src/app/services/employee-list/employee-list.service';
import { EmployeeViewComponent } from './containers/employee-view/employee-view.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeViewBannerComponent } from './components/employee-view-banner/employee-view-banner.component';
import { EmployeePersonalInfoComponent } from './components/employee-personal-info/employee-personal-info.component';
import { EmployeeTotalInfoComponent } from './components/employee-total-info/employee-total-info.component';
import { CreateEmployeeComponent } from './containers/create-employee/create-employee.component';
import { CreateEmployeeFormComponent } from './components/create-employee-form/create-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const loginRoutes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent },
  { path: 'view-employee/:id', pathMatch: 'full', component: EmployeeViewComponent },
  { path: 'create-employee', pathMatch: 'full', component:CreateEmployeeComponent},
  { path: 'edit-employee/:id', pathMatch: 'full', component:CreateEmployeeComponent}
];
// test comment
@NgModule({
  declarations: [
    DashboardComponent,
    CreateEmployeeComponent,
    BannerComponent,
    EmployeeCardListComponent,
    EmployeeCardComponent,
    EmployeeViewComponent,
    EmployeeInfoComponent,
    EmployeeViewBannerComponent,
    EmployeePersonalInfoComponent,
    EmployeeTotalInfoComponent,
    CreateEmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(loginRoutes),
    ToastrModule.forRoot(
      { preventDuplicates: true,
        timeOut: 1500,
      }
    ),
    
  ],
  schemas: [
     CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[EmployeeListService]
})
export class DashboardModule { }
