import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { CartComponent } from './cart/cart.component';
import { MyordersComponent } from './myorders/myorders.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: OrderComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Listado de Pedidos',
    },
  },
  {
    path: 'myorders',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: MyordersComponent,
    data: {
      expectedRole: ['usuario'],
      title: 'Mis Pedidos',
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    pathMatch: 'full',
    data: {
      expectedRole: ['usuario'],
      title: 'Mi carrito',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
