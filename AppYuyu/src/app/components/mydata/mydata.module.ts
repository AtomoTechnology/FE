import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydataRoutingModule } from './mydata-routing.module';
import { MydataComponent } from './mydata/mydata.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MydataComponent],
  imports: [CommonModule, MydataRoutingModule, ReactiveFormsModule],
})
export class MydataModule {}
