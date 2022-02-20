import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { ActionpriceComponent } from './actionprice/actionprice.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: PriceComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Lista de los precios',
    },
  },
  {
    path: 'createprice',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: ActionpriceComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Crear precio',
    }
  },
  {
    path: 'updateprice/:id',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: ActionpriceComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Actualizar precio',
    }
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
export class PriceRoutingModule {}
