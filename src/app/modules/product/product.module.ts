import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import {NgIconComponent, NgIconsModule} from "@ng-icons/core";
import {ProductService} from "../../services/api/product.service";
import {AngularSvgIconModule} from "angular-svg-icon";
import {heroPencilSquareSolid, heroTrashSolid} from "@ng-icons/heroicons/solid";
import { FormProductComponent } from './pages/form-product/form-product.component';
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductSelectorComponent,
    ListProductsComponent,
    FormProductComponent
  ],
  exports: [
    ProductSelectorComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgIconComponent,
    AngularSvgIconModule,
    NgIconsModule.withIcons({
      heroPencilSquareSolid,
      heroTrashSolid,
    }),
    FormsModule,
  ],
  providers: [
    {provide: 'ProductService', useClass: ProductService},
    {provide: Pusher, useValue: Pusher}
  ]
})
export class ProductModule { }
