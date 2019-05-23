import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from 'src/app/services/login/login.service';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';

const loginRoutes: Routes = [
  { path: '',pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    ToastrModule.forRoot(
      { preventDuplicates: true,
        timeOut: 1500,
      }
    ),
    RouterModule.forChild(loginRoutes)
  ],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers:[LoginService]
})
export class LoginModule { }
