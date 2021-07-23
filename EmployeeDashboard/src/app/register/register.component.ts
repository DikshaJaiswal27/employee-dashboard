import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { AuthenticationService } from '../service/authentication.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  employeeRegistration: Employee = new Employee();
  submitted = false;
  message: string ;
  constructor(private router: Router,
              private employeeService: EmployeeService) {
  }
  ngOnInit() {

  }
  changeUser(e) {
    this.employeeRegistration.role = e.target.value;
  }
  addEmployee() {

    this.employeeService.addEmployee(this.employeeRegistration)
           .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                  alert(error);
                });
    }
  cancel() {
    this.router.navigateByUrl('/login');
  }
}
