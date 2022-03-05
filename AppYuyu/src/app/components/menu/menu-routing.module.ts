import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuComponent } from './menu/menu.component';
import { MenuactionComponent } from './menuaction/menuaction.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: MenuComponent,
    data: {
      expectedRole: ['admin'],
      title: 'Listado de Menu',
    },
  },
  {
    path: ':name/:id',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: MenuDetailComponent,
    data: {
      expectedRole: ['usuario', 'admin'],
      title: 'Detalle  Menu',
    },
  },
  {
    path: 'action',
    component: MenuactionComponent,
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: ['admin'],
      title: 'Listado de Menu',
    },
  },
  {
    path: 'action/:id',
    component: MenuactionComponent,
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: ['admin'],
      title: 'Listado de Menu',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
