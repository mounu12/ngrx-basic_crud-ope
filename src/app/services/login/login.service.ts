import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(private httpClient: HttpClient, private router: Router) { }

  logIn(payload) {
    const usercredentials = btoa(payload.payload.email + ':' + payload.payload.password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + usercredentials,
        'X-Tenant': payload.payload.Tenantname
       })
    };
    const user = {
      email:payload.payload.email,
      password: payload.payload.password

    }
    return this.httpClient.post(environment.api + 'login', user, httpOptions).pipe(map((res: Response) => {
      return res;
    }));
  }
  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // if (localStorage.getItem('token')) {
    if (this.isAuthenticated()) {

      return true;
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
