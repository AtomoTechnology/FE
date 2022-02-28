import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuactionComponent } from './menuaction/menuaction.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuComponent, MenuDetailComponent, MenuactionComponent],
  imports: [CommonModule, MenuRoutingModule, ReactiveFormsModule],
  exports: [MenuComponent, MenuRoutingModule],
})
export class MenuModule {}
