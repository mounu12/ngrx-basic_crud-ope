import { ActionReducerMap, MetaReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import {loadAuthReducer,authState} from './auth.reducers';

import {environment} from '../../../environments/environment';
import { loadEmployeeReducer, EmployeeState } from './employeelist.reducers';
import { loadEmployeeSalaryReducer, SalaryState } from './salarylist.reducers';

export interface AppState {
  auth: authState;
  employees: EmployeeState;
  salaries: SalaryState;
}

export default combineReducers({
  loadAuthReducer,
  loadEmployeeReducer,
  loadEmployeeSalaryReducer,
});

export const reducers: ActionReducerMap<AppState> = {
  auth: loadAuthReducer,
  employees: loadEmployeeReducer,
  salaries: loadEmployeeSalaryReducer

};

export const metaReducers: MetaReducer<AppState>[] =
!environment.production ? [storeFreeze] : [];