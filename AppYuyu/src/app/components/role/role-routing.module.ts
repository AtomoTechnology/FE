import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { ActionroleComponent } from './actionrole/actionrole.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
  },
  {
    path: 'ActionRole',
    canActivate: [SecurityGuardGuard],
    component: ActionroleComponent,
  },
  {
    path: 'ActionRole/:id',
    canActivate: [SecurityGuardGuard],
    component: ActionroleComponent,
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
