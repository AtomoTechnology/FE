import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price/price.component';
import { ActionpriceComponent } from './actionprice/actionprice.component';
import { PrimeNgModule } from 'src/app/specialmodule/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PriceComponent,
    ActionpriceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    PriceRoutingModule
  ]
})
export class PriceModule { }
