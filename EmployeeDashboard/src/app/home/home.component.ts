import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {
    userName : '',
    id: ''
  };
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.empInfo.subscribe(value => {
      if (value) {
        this.user.userName = value.username;
        this.user.id = value.userid;
      }},
      error => {
        alert(error);
      });
  }

}
