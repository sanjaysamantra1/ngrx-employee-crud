import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../ngrx/employee.actions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {
  user: any = {};

  constructor(private store: Store<{ employees: Employee[] }>) {
  }

  submitEmpForm(formdata: any) {
    this.store.dispatch(addEmployee({ employee: formdata }));
  }
}
