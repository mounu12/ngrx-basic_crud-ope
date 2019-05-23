import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../services/login/login.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { LogIn } from 'src/app/state/actions/auth.actions';

@Component({
  selector: 'hrms-payroll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logindata: any = {};
  user: any = {};
  tenantName: any = {};
  constructor( private router: Router, private toastr: ToastrService,
                private loginService: LoginService, private appState: Store<AppState>) { }

  ngOnInit() {
  }
  // signIn() {
  //   this.loginService.logIn(this.user, this.tenantName).subscribe( (data: any) => {
  //     console.log(data);
  //     this.cookieService.set('Bearer', data.accessToken);
  //     if(data.accessToken) {
  //       this.router.navigateByUrl('/employee-list');
  //     } else {
  //       this.toastr.error("Invalid credentials");
  //     }
  //   },
  // );
  // }
  signIn(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password,
      Tenantname: this.tenantName.Tenantname,
    }
    this.appState.dispatch(new LogIn(payload));
  }
}
