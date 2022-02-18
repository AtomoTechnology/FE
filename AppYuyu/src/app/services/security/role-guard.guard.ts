import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rightRol = route.data.expectedRole.includes(
      this.authService.GetDataFromStorage().role.toLowerCase()
    );

    if (!this.authService.isAuthenticated() || !rightRol) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
