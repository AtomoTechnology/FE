import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class SecurityGuardGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}
  canLoad(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
