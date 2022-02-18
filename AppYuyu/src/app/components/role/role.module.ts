import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role/role.component';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';
import { ActionroleComponent } from './actionrole/actionrole.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoleComponent, ActionroleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    RoleRoutingModule,
  ],
  exports: [RoleComponent, RoleRoutingModule],
})
export class RoleModule {}
