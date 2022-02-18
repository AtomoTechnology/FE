import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { ActionroleComponent } from './actionrole/actionrole.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    data: {
      expectedRole: 'admin',
      title: 'Lista de los roles'
    }
  },
  {
    path: 'ActionRole',   
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: ActionroleComponent,
    data: {
      expectedRole: 'admin',
      title: 'Crear  rol'
    }
  },
  {
    path: 'ActionRole/:id',
    canActivate: [SecurityGuardGuard],
    component: ActionroleComponent,
    data: {
      expectedRole: 'admin',
      title: 'Actualizar rol'
    }
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
