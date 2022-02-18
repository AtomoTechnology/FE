import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status/status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';

@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    StatusRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ],
})
export class StatusModule {}
