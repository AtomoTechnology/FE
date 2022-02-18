import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isAuthenticated() || this.authService.GetDataFromStorage().role.toLowerCase() !== route.data.expectedRole) {
      this.router.navigate(['Home']);
      return false;
    }
    return true;
  }
  
}