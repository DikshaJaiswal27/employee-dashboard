import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate() {
    const role = localStorage.getItem('user_role');
    if (role === 'admin') {
      return true;
    }
    alert('You dont have Admin Access');
    return false;
  }
}
