import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { RoleGuard } from './shared/role.guard';


const routes: Routes = [
  { path: '' , redirectTo : '/login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthguardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'employeeList', component: EmployeeListComponent, canActivate : [AuthguardGuard, RoleGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
