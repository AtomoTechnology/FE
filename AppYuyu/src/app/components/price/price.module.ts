import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price/price.component';
import { ActionpriceComponent } from './actionprice/actionprice.component';


@NgModule({
  declarations: [
    PriceComponent,
    ActionpriceComponent
  ],
  imports: [
    CommonModule,
    PriceRoutingModule
  ]
})
export class PriceModule { }
