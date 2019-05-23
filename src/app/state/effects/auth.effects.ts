import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { Observable, of, defer } from 'rxjs';
import { Action } from '@ngrx/store';
import { LogIn, LogInSuccess, LogInFailure, LogOut, AuthActionTypes } from '../actions/auth.actions';
import { switchMap, takeUntil, map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private loginService: LoginService,
        private router: Router,
      ) { }
      @Effect()
      Login$: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN),
        switchMap((payload) => {
          const onLogin$ = this.actions$.pipe(
            ofType(AuthActionTypes.LOGIN)
          );
    
          return this.loginService.logIn(payload).pipe(
            takeUntil(onLogin$),
            map((result: any) => {
           this.router.navigateByUrl('/employee');
              return new LogInSuccess(result);
            }),
            catchError(error =>
              of(new LogInFailure(error))
            )
          );
        })
      );
      @Effect({ dispatch: false })
      LogInSuccess: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user) => {
          localStorage.setItem('result', JSON.stringify(user.payload));
          // localStorage.setItem('payload',JSON.stringify(user.payload));
          localStorage.setItem('token', user.payload.accessToken);
    
        })
      );
    
      @Effect({ dispatch: false })
      LogInFailure: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGIN_FAILURE)
      );
    
    
      @Effect({ dispatch: false })
      public LogOut: Observable<any> = this.actions$.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap((user) => {
         localStorage.clear();
         this.router.navigateByUrl('/');
        })
      );
    
      @Effect()
      init$ = defer((): Observable<LogInSuccess | LogOut> => {
        const userData = JSON.parse(localStorage.getItem('result'));
        // const token = JSON.parse(localStorage.getItem('payload'));
        // console.log(token)
        return (userData)
          ? of(new LogInSuccess(userData))
          : of(new LogOut());
      });

      
}