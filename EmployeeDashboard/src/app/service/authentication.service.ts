import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  empInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient,
              private router: Router, ) {
      this.loadEmpInfo();
  }
  isLoggedIn() {
    return (localStorage.getItem('access_token') ? true : false);
  }
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  loadEmpInfo() {
        const accesstoken =  localStorage.getItem('access_token');
        if (accesstoken) {
        const decrypteUser = this.jwtHelper.decodeToken(accesstoken);
        const data = {
            access_token: accesstoken,
            refresh_token : localStorage.getItem('refresh_token'),
            username: localStorage.getItem('username'),
            userid: decrypteUser.sub,
            tokenExpiration: decrypteUser.exp
          };
        return this.empInfo.next(data);
      }
  }

  login(username: string, password: string): any {
      return this.http.post<any>('http://localhost:3000/login', { username, password })
          .pipe(map(value => {
              // login successful if there's a jwt token in the response
              if (value) {
                // tslint:disable-next-line: max-line-length
                const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs';
                const refreshToken = 'dummy';
                localStorage.setItem('access_token', accessToken);
                localStorage.setItem('refresh_token', refreshToken);
                localStorage.setItem('username', username);
                const role = username.includes('admin') ? 'admin' : 'user';
                localStorage.setItem('user_role', role);
                const decrypteUser = this.jwtHelper.decodeToken(accessToken);
                console.log(decrypteUser);

                const data = {
                    access_token: accessToken,
                    refresh_token : refreshToken,
                    username,
                    userid: decrypteUser.sub,
                    tokenExpiration: decrypteUser.exp
                };
                this.empInfo.next(data);
                return true;
              }
              alert('Unable to login.Please try later.');
              return false;
          }));
  }
}
