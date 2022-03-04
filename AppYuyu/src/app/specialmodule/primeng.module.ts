import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  exports: [ButtonModule, TableModule, TooltipModule, AccordionModule],
})
export class PrimeNgModule {}
