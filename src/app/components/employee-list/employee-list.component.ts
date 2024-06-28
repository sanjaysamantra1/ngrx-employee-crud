import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { deleteEmployee } from '../../ngrx/employee.actions';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees$: Observable<Employee[]> = this.store.select(state => state.employees);

  constructor(private store: Store<{ employees: Employee[] }>) {
  }

  ngOnInit() {
    this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
  }

  deleteEmp(id: string) {
    this.store.dispatch(deleteEmployee({ id }));
  }
}
