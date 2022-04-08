import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon/coupon.component';
import { CreatecouponComponent } from './createcoupon/createcoupon.component';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CouponComponent,
    CreatecouponComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CouponRoutingModule
  ]
})
export class CouponModule { }
