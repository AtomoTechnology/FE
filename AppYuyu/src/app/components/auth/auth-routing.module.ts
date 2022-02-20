import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuardGuard } from 'src/app/services/security/role-guard.guard';
import { SecurityGuardGuard } from 'src/app/services/security/security-guard.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Accesso al sistema',
    },
  },
  {
    path: 'users', 
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],   
    component: UserComponent,
    data: {      
      expectedRole: ['admin'],
      title: 'Lista de usuarios',
    },
  },
  {
    path: 'register',    
    component: RegisterComponent,
    data: {
      title: 'Registrar usuario',
    },
  },
  {
    path: 'updateregister/:id', 
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],   
    component: RegisterComponent,
    data: {      
      expectedRole: ['admin','user'],
      title: 'Actualizando usuario',
    },
  },
  {
    path: 'changepassword/:id', 
    canLoad: [SecurityGuardGuard],
    canActivate: [RoleGuardGuard],   
    component: RegisterComponent,
    data: {      
      expectedRole: ['admin','user'],
      title: 'Cambiando contraseña',
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
export class AuthRoutingModule {}
