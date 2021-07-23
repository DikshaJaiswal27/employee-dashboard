import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './service/authentication.service';
import { EmployeeService } from './service/employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthguardGuard } from './shared/authguard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService,
              EmployeeService,
              AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
