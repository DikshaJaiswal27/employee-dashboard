import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  returnUrl: string;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
   }

  ngOnInit() {
  }
  login() {
    this.authenticationService.login(this.username, this.password)
    .subscribe(
          data => {
            if (data) {
              this.router.navigate(['/home']);
            } else {
              alert('Login Failed');
            }
          },
          error => {
            alert('Unable to login.Please try later.');
          });
    }
}

