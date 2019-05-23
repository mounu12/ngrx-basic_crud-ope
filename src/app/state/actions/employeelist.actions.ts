import { Action } from '@ngrx/store';
import { Employee } from 'src/app/models/employeelist.model';
import { employeeSort } from 'src/app/models/employeesort.model';


export enum EmployeeActionTypes {

  EmployeeListSelectedAction   = '[Employee Selected] Action',
  EmployeeListLoadAction       = '[Employee Load] Action',
  EmployeeListLoadSuccess     = '[Employee Load Success] Action',
  EmployeeListLoadFailure     = '[Employee Load Failure] Action',

  SelectedEmployeeLoadFailure = '[Selected Employee Failure] Action',
  SelectedEmployeeLoadSuccess = '[Selected Employee Success] Action',

  AddEmployee = '[Add Employee] Action',
  AddEmployeeSuccess = '[Add Employee Success]',
  AddEmployeeFailure = '[Add Employee Failure]',


}


export class  EmployeeListSelectedAction implements Action {

    readonly type = EmployeeActionTypes.EmployeeListSelectedAction;
  
    constructor(public payload: Employee) {
  
    }
  }
  export class  EmployeeListLoadFailure implements Action {
  
    readonly type = EmployeeActionTypes.EmployeeListLoadFailure;
  
    constructor(public payload: null) {
  
    }
  }
  
  export class  EmployeeListLoadSuccess implements Action {
  
    readonly type = EmployeeActionTypes.EmployeeListLoadSuccess;
  
    constructor(public payload: Employee []) {
  
    }
  }
  export class  SelectedEmployeeLoadFailure implements Action {
  
    readonly type = EmployeeActionTypes.SelectedEmployeeLoadFailure;
  
    constructor(public payload: null) {
  
    }
  }
  
  export class  SelectedEmployeeLoadSuccess implements Action {
  
    readonly type = EmployeeActionTypes.SelectedEmployeeLoadSuccess;
  
    constructor(public payload: Employee) {
  
    }
  }
  export class EmployeeLoad implements Action {
    readonly type = EmployeeActionTypes.EmployeeListLoadAction;
    constructor(public payload: employeeSort) {
      
    }
  }
  export class AddEmployee implements Action {
    readonly type = EmployeeActionTypes.AddEmployee;
    constructor(public payload: Employee) {}
  }
  export class AddEmployeeSuccess implements Action {
    readonly type = EmployeeActionTypes.AddEmployeeSuccess;
    constructor(public payload: Employee ) {}
  }
  
  export class AddEmployeeFailure implements Action {
    readonly type = EmployeeActionTypes.AddEmployeeFailure;
    constructor(public payload: Employee) {}
  }
  export type EmployeeActions =  EmployeeListSelectedAction |
                                EmployeeLoad |
                                EmployeeListLoadSuccess |
                                EmployeeListLoadFailure |
                                SelectedEmployeeLoadFailure |
                                SelectedEmployeeLoadSuccess |
                                AddEmployee |
                                AddEmployeeSuccess |
                                AddEmployeeFailure;