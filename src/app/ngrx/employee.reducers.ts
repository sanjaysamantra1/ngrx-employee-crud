import { createReducer, on } from '@ngrx/store';
import { fetchEmployees, fetchEmployeesError, fetchEmployeesSucess } from './employee.actions';

export const initialState = [];

export const employeesReducer = createReducer(
  initialState,
  on(fetchEmployees, (state) => state),
  on(fetchEmployeesSucess, (state, data: any) => {
    return data.payload;
  }),
  on(fetchEmployeesError, (state) => state)
);