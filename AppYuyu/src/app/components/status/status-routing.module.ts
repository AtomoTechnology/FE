import { StatusComponent } from './status/status.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionstatusComponent } from './actionstatus/actionstatus.component';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: StatusComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Lista de los estados',
    },
  },
  {
    path: 'action',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: ActionstatusComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Crear Estado',
    },
  },
  {
    path: 'action/:id',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: ActionstatusComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Editar Estado',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusRoutingModule {}
