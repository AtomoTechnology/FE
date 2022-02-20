import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserComponent],
  imports: [CommonModule, AuthRoutingModule,PrimeNgModule, ReactiveFormsModule],
  exports: [LoginComponent, AuthRoutingModule],
})
export class AuthModule {}
