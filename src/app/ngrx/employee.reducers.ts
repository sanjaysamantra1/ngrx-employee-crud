import { createReducer, on } from '@ngrx/store';
import { fetchEmployees, fetchEmployeesError, fetchEmployeesSucess } from './employee.actions';

export const initialState = [];

export const employeesReducer = createReducer(
  initialState,
  on(fetchEmployeesSucess, (state, action: any) => {
    return action.payload;
  }),
);