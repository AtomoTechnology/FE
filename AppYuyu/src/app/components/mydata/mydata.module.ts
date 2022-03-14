import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MydataRoutingModule } from './mydata-routing.module';
import { MydataComponent } from './mydata/mydata.component';


@NgModule({
  declarations: [
    MydataComponent
  ],
  imports: [
    CommonModule,
    MydataRoutingModule
  ]
})
export class MydataModule { }
