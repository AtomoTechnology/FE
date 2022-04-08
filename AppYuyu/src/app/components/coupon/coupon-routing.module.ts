import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { CouponComponent } from './coupon/coupon.component';
import { CreatecouponComponent } from './createcoupon/createcoupon.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: CouponComponent,
    data: {
      expectedRole: ['usuario'],
      title: 'Mis coupon',
    },
  },
  {
    path: 'createcoupon',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: CreatecouponComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Crear cupon',
    },
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponRoutingModule {}
