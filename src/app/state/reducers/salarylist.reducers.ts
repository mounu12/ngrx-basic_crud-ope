import { salaryModel } from 'src/app/models/salary.model';
import { SalaryActionTypes, SalaryActions } from '../actions/salarylist.action';

export interface SalaryState {
    salary: Array<salaryModel>;
      selectedSalary: salaryModel;
    isProcessing: boolean;
    error: null;
  }

  export interface Employees {
    salaries: Array<salaryModel>;
  }
  
  export const initialSalaryState: SalaryState = {
    salary: [],
    selectedSalary: undefined,
    isProcessing: false,
    error: null
  };

  export function loadEmployeeSalaryReducer(state: SalaryState = initialSalaryState,
    action: SalaryActions) {
    switch (action.type) {
      case SalaryActionTypes.SalaryListLoadAction:
        return {
          ...state,
          isProcessing: true,
          error: null
        };
      case SalaryActionTypes.SalaryListLoadSuccess:
        return {
          ...state,
          salary: action.payload,
          isProcessing: false,
          error: null,
          selectedSalary: undefined
        };
      case SalaryActionTypes.SalaryListLoadFailure:
        return {
          ...state,
          salary: action.payload,
          isProcessing: false,
          error: action.payload
        };
        case SalaryActionTypes.SalaryListSelectedAction:
        return {
          ...state,
          selectedSalary: action.payload
        };
    }
}