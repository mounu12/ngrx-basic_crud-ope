import { Action } from '@ngrx/store';
import { salaryModel } from 'src/app/models/salary.model';

export enum SalaryActionTypes {

    SalaryListSelectedAction   = '[Salary Selected] Action',
    SalaryListLoadAction       = '[Salary Load] Action',
    SalaryListLoadSuccess     = '[Salary Load Success] Action',
    SalaryListLoadFailure     = '[Salary Load Failure] Action',
  
  }

  export class  SalaryListSelectedAction implements Action {

    readonly type = SalaryActionTypes.SalaryListSelectedAction;
  
    constructor(public payload: salaryModel) {
  
    }
  }
  export class  SalaryListLoadFailure implements Action {
  
    readonly type = SalaryActionTypes.SalaryListLoadFailure;
  
    constructor(public payload: null) {
  
    }
  }
  
  export class  SalaryListLoadSuccess implements Action {
  
    readonly type = SalaryActionTypes.SalaryListLoadSuccess;
  
    constructor(public payload: salaryModel []) {
  
    }
}
    export class SalaryListLoad implements Action {
        readonly type = SalaryActionTypes.SalaryListLoadAction;
  }

  export type SalaryActions =   SalaryListSelectedAction|
                                SalaryListLoadFailure|
                                SalaryListLoadSuccess|
                                SalaryListLoad;
