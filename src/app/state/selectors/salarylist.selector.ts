import { createSelector } from '@ngrx/store';


export const selectEmployeeSalaryState = state => state.salary;


export const salaries = createSelector(
    selectEmployeeSalaryState ,
);

