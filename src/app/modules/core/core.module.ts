import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../shared/module/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { reducers, metaReducers } from '../../state/reducers';
import { AuthEffects } from 'src/app/state/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { EmployeeListEffects } from 'src/app/state/effects/employeelist.effects';
import { SalaryListEffects } from 'src/app/state/effects/salarylist.effects';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects,EmployeeListEffects,SalaryListEffects]),
    ToastrModule.forRoot(
      { preventDuplicates: true,
        timeOut: 1500,
      }
    ),
  ],
  exports: [ SidebarComponent],
  providers: []
})
export class CoreModule { }
