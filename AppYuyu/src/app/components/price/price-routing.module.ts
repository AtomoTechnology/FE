import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionpriceComponent } from './actionprice/actionprice.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path: '',
    component: PriceComponent,
  },
  {
    path: 'action/:id',
    component: ActionpriceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriceRoutingModule {}
