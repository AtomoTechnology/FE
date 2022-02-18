import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDetailComponent } from './components/menu/menu-detail/menu-detail.component';
import { RoleComponent } from './components/role/role/role.component';
import { RoleGuardGuard } from './services/security/role-guard.guard';
import { SecurityGuardGuard } from './services/security/security-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'menu/:name',
    component: MenuDetailComponent,
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./components/role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'statuses',
    loadChildren: () =>
      import('./components/status/status.module').then((m) => m.StatusModule),
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
