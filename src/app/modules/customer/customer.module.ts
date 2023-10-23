import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {ListCustomerComponent} from './pages/list-customer/list-customer.component';
import {FormCustomerComponent} from './pages/form-customer/form-customer.component';
import {NgIconComponent, NgIconsModule} from "@ng-icons/core";
import {SharedModule} from "../../shared/shared.module";
import {CustomerService} from "../../services/api/customer.service";
import {heroPencilSquareSolid, heroTrashSolid} from "@ng-icons/heroicons/solid";


@NgModule({
  declarations: [
    ListCustomerComponent,
    FormCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({
      heroPencilSquareSolid,
      heroTrashSolid,
    }),
  ],
  providers: [
    {provide: 'CustomerService', useClass: CustomerService},
  ]
})
export class CustomerModule {
}
