import { createSelector } from '@ngrx/store';


export const authState = state => state.auth;


export const projects = createSelector(
    authState,
);
