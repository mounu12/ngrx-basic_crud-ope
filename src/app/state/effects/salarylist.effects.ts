import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { EmployeeSalaryListService } from 'src/app/services/employee-salary-list/employee-salary-list.service';
import { SalaryActionTypes, SalaryListLoadSuccess, SalaryListLoadFailure } from '../actions/salarylist.action';
import { switchMap, takeUntil, map, catchError } from 'rxjs/operators';
import { salaryModel } from 'src/app/models/salary.model';

@Injectable()
export class SalaryListEffects {

    constructor(private employeesalarylistService: EmployeeSalaryListService, 
                private actions$: Actions, private router: Router) { }
    @Effect()
loadAllSalaryList$: Observable<Action> = this.actions$.pipe(
  ofType(SalaryActionTypes.SalaryListLoadAction),
  switchMap( () => {

    const onAllSalaryLoaded$ = this.actions$.pipe(
        ofType(SalaryActionTypes.SalaryListLoadAction)
      );

    return this.employeesalarylistService.loadSalaryList().pipe(
        takeUntil(onAllSalaryLoaded$),
        map(
            (salary: salaryModel[]) => new SalaryListLoadSuccess(salary)
            ),
        catchError(error =>
            of(new SalaryListLoadFailure(error))
            )
        );
      })
);
    }