import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchAllEmployees() {
    return this.http.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: any) {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
}
