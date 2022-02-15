import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role/role.component';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';
import { ActionroleComponent } from './actionrole/actionrole.component';

@NgModule({
  declarations: [RoleComponent, ActionroleComponent],
  imports: [CommonModule, RoleRoutingModule,PrimeNgModule],
  exports: [RoleComponent, RoleRoutingModule],
})
export class RoleModule {}
