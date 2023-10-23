import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {InvoiceRoutingModule} from './invoice-routing.module';
import {ListInvoiceComponent} from './pages/list-invoice/list-invoice.component';
import {InvoiceService} from "../../services/api/invoice.service";
import {SharedModule} from "../../shared/shared.module";
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormInvoiceComponent} from './pages/form-invoice/form-invoice.component';
import {FormsModule} from "@angular/forms";
import {NgIconsModule} from "@ng-icons/core";
import {heroPencilSquareSolid, heroTrashSolid} from "@ng-icons/heroicons/solid";
import {SearchFormComponent} from './components/search-form/search-form.component';
import {ItemFormComponent} from './components/item-form/item-form.component';
import {ProductModule} from "../product/product.module";
import {ProductService} from "../../services/api/product.service";


@NgModule({
  declarations: [
    ListInvoiceComponent,
    FormInvoiceComponent,
    SearchFormComponent,
    ItemFormComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    SharedModule,
    AngularSvgIconModule,
    NgIconsModule.withIcons({
      heroPencilSquareSolid,
      heroTrashSolid,
    }),
    ProductModule,
    NgOptimizedImage,
  ],
  providers: [
    {provide: 'InvoiceService', useClass: InvoiceService},
    {provide: 'ProductService', useClass: ProductService},
  ],
})
export class InvoiceModule {
}
