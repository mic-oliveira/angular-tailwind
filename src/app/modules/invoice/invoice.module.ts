import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvoiceRoutingModule} from './invoice-routing.module';
import { ListInvoiceComponent } from './pages/list-invoice/list-invoice.component';
import {InvoiceService} from "../../services/api/invoice.service";
import {SharedModule} from "../../shared/shared.module";
import {AngularSvgIconModule} from "angular-svg-icon";


@NgModule({
  declarations: [
    ListInvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    SharedModule,
    AngularSvgIconModule
  ],
  providers: [
    {provide: 'ApiInterface', useClass: InvoiceService}
  ]
})
export class InvoiceModule { }
