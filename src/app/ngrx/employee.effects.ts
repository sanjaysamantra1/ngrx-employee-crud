import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { EmployeeService } from '../services/employee.service';
import { props } from '@ngrx/store';

@Injectable()
export class EmployeeEffects {

    loadEmployees$ = createEffect(() => this.actions$.pipe(
        ofType('[EmployeeList Page] Fetch Employees'),
        exhaustMap(() => this.employeeService.fetchAllEmployees()
            .pipe(
                map(Employees =>
                     ({ type: '[Employees API] Employees Loaded Successfully', payload: Employees })
                ),
                catchError(() => of({ type: '[Employees API] Employees Loaded Error' }))
            ))
    ));

    deleteEmployee$ = createEffect(() => this.actions$.pipe(
        ofType('[Employees API] Delete Employee'),
        exhaustMap((action:any) => this.employeeService.deleteEmployee(action.id)
            .pipe(
                map(Employee =>{
                    return ({ type: '[EmployeeList Page] Fetch Employees' })
                }),
                catchError(() => of({ type: '[Employees API] Employee Delete Error' }))
            ))
    ));

    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
    ) { }
}