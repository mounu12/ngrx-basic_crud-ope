import { Employee } from 'src/app/models/employeelist.model';
import { EmployeeActions, EmployeeActionTypes } from '../actions/employeelist.actions';
import { selectedEmployee } from '../selectors/employeelist.selector';


export interface EmployeeState {
  employee: Array<Employee>;
  selectedEmployee: Employee;
  isProcessing: boolean;
  error: null;
}

export interface Employees {
  employees: Array<Employee>;
}

export const initialEmployeeState: EmployeeState = {
  employee: [],
  selectedEmployee: undefined,
  isProcessing: false,
  error: null
};

export function loadEmployeeReducer(state: EmployeeState = initialEmployeeState,
  action: EmployeeActions) {
  switch (action.type) {
    case EmployeeActionTypes.EmployeeListLoadAction:
      return {
        ...state,
        isProcessing: true,
        error: null
      };
    case EmployeeActionTypes.EmployeeListLoadSuccess:
      return {
        ...state,
        employee: action.payload,
        isProcessing: false,
        error: null,
        selectedEmployee: undefined
      };
    case EmployeeActionTypes.EmployeeListLoadFailure:
      return {
        ...state,
        employee: action.payload,
        isProcessing: false,
        error: action.payload
      };
    case EmployeeActionTypes.EmployeeListSelectedAction:
      return {
        ...state,
        selectedEmployee: action.payload
      };
      case EmployeeActionTypes.SelectedEmployeeLoadSuccess:
      return {
        ...state,
        error: null,
        selectedEmployee: action.payload
      };
      case EmployeeActionTypes.SelectedEmployeeLoadFailure:
      return {
        ...state,
        error: action.payload,
        selectedEmployee: undefined
      };
            case EmployeeActionTypes.SelectedEmployeeLoadSuccess:
      return {
        ...state,
        error: null,
        selectedEmployee: action.payload
      };
      case EmployeeActionTypes.AddEmployeeSuccess:{
      return {
        ...state,
        selectedEmployee: action.payload,
        //  selectedEmployee: undefined
      };
    }
    default:
      return state;
  }
}