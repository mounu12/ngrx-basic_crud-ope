import { createSelector } from '@ngrx/store';


export const selectEmployeeState = state => state.employee;
export const selectedEmployee = state => state.selectedemployee


export const employees = createSelector(
    selectEmployeeState ,
    selectedEmployee
);

