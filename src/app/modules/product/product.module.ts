import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';


@NgModule({
  declarations: [
    ProductSelectorComponent
  ],
  exports: [
    ProductSelectorComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
