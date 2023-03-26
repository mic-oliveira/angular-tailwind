import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvoiceRoutingModule} from './invoice-routing.module';
import {ListInvoiceComponent} from './pages/list-invoice/list-invoice.component';
import {InvoiceService} from "../../services/api/invoice.service";
import {SharedModule} from "../../shared/shared.module";
import {AngularSvgIconModule} from "angular-svg-icon";
import {FormInvoiceComponent} from './pages/form-invoice/form-invoice.component';
import {FormsModule} from "@angular/forms";
import {NgIconsModule} from "@ng-icons/core";
import {heroPencilSquareSolid, heroTrashSolid} from "@ng-icons/heroicons/solid";


@NgModule({
  declarations: [
    ListInvoiceComponent,
    FormInvoiceComponent
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
  ],
  providers: [
    {provide: 'ApiInterface', useClass: InvoiceService},
  ],
})
export class InvoiceModule { }
