import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { MyordersComponent } from './myorders/myorders.component';
import { CartComponent } from './cart/cart.component';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';

@NgModule({
  declarations: [OrderComponent, MyordersComponent, CartComponent],
  imports: [CommonModule, OrderRoutingModule, PrimeNgModule],
})
export class OrderModule {}
