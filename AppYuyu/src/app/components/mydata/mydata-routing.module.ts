import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { MydataComponent } from './mydata/mydata.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],
    component: MydataComponent,
    data: {
      expectedRole: ['usuario', 'admin'],
      title: 'Mis Datos',
    },
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydataRoutingModule {}
