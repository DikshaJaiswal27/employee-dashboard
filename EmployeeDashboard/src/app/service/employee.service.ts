import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployee() {
      return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  addEmployee(employee: Employee) {
      return this.http.post('http://localhost:3000/employee', employee);
  }
}
