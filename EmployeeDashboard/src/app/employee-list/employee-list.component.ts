import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeArr: Employee[];
  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee() {
  this.employeeService.getAllEmployee()
   .subscribe(
      data => {
         this.employeeArr = data;
      },
      error => {
        alert(error);
      });
    }
}
