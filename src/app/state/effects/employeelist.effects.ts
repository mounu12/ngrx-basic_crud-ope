import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, takeUntil, map, catchError, tap } from 'rxjs/operators';
import { EmployeeActionTypes, 
        EmployeeListLoadSuccess,
        EmployeeListLoadFailure, 
        SelectedEmployeeLoadSuccess,
        SelectedEmployeeLoadFailure,
        AddEmployeeSuccess,
        AddEmployeeFailure} from '../actions/employeelist.actions';
import { EmployeeListService } from 'src/app/services/employee-list/employee-list.service';
import { Employee } from 'src/app/models/employeelist.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class EmployeeListEffects {

    constructor(private employeelistService: EmployeeListService, 
                private actions$: Actions, private toastr: ToastrService, private router: Router) { }
    @Effect()
loadAllEmployees$: Observable<Action> = this.actions$.pipe(
  ofType(EmployeeActionTypes.EmployeeListLoadAction),
  switchMap( (payload) => {

    const onAllEmployeesLoaded$ = this.actions$.pipe(
        ofType(EmployeeActionTypes.EmployeeListLoadAction)
      );

    return this.employeelistService.loadEmployeeList(payload).pipe(
        takeUntil(onAllEmployeesLoaded$),
        map(
            (employee: Employee[]) => new EmployeeListLoadSuccess(employee)
            ),
        catchError(error =>
            of(new EmployeeListLoadFailure(error))
            )
        );
      })
);
@Effect()
loadSelectedEmployees$: Observable<Action> = this.actions$.pipe(
  ofType(EmployeeActionTypes.EmployeeListSelectedAction),
  switchMap( (payload) => {

    const selectedEmployeeLoaded$ = this.actions$.pipe(
        ofType(EmployeeActionTypes.EmployeeListSelectedAction)
      );

    return this.employeelistService.getSelectedEmployee(payload).pipe(
        takeUntil(selectedEmployeeLoaded$),
        map(
            (employee: Employee) => new SelectedEmployeeLoadSuccess(employee)
            ),
        catchError(error =>
            of(new SelectedEmployeeLoadFailure(error))
            )
        );
      })
);
@Effect()
postEmployeeData$: Observable<Action> = this.actions$.pipe(
    ofType(EmployeeActionTypes.AddEmployee),
    switchMap( (payload) => {
        const onEmployee$ = this.actions$.pipe(
            ofType(EmployeeActionTypes.AddEmployee)
          );
          return this.employeelistService.addEmployee(payload).pipe(
            takeUntil(onEmployee$),
            map((employee: Employee) => { 
                  this.toastr.success(employee.message+'with ID:'+employee.response);
                this.router.navigateByUrl('/employee');
                //  this.toastr.success(employee.message+'with ID:'+employee.response);
                return new AddEmployeeSuccess(employee)
            }),
            catchError(error =>
                of(new AddEmployeeFailure(error))
                )
            );
    })
)
}